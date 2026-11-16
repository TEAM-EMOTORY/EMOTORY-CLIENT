import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import joyImg from '@shared/assets/emotion-card/joy.webp'
import sadImg from '@shared/assets/emotion-card/sad.webp'
import angryImg from '@shared/assets/emotion-card/angry.webp'
import fearImg from '@shared/assets/emotion-card/fear.webp'
import shyImg from '@shared/assets/emotion-card/disgust.webp'
import surpriseImg from '@shared/assets/emotion-card/surprise.webp'
import Book from '@shared/components/book/book'
import StoryBook from './components/story-book/story-book'
import type { StoryBookHandle } from './components/story-book/story-book'
import { usePrepareStory } from '@shared/hooks/use-prepare-story'
import { useStoryNode } from './hooks/use-story-node'
import { useSelectChoice } from './hooks/use-select-choice'
import { usePlayHistories } from './hooks/use-play-histories'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'
import { useCreateStoryResult } from '@shared/hooks/use-story-result'

const STORY_TOTAL_STEPS = 4

const EMOTION_FACE: Record<string, string> = {
  기쁨: joyImg,
  슬픔: sadImg,
  분노: angryImg,
  두려움: fearImg,
  부끄러움: shyImg,
  놀라움: surpriseImg,
}

const StoryPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { storyNodeId } = useParams()

  const childName = localStorage.getItem('childName') ?? ''

  const currentNodeId = storyNodeId ? Number(storyNodeId) : undefined
  const playSessionId: number | undefined = state?.playSessionId
  const { data: nodeData, isFetching } = useStoryNode(currentNodeId)
  const { mutate: selectChoice } = useSelectChoice()
  const { data: historyChosen } = usePlayHistories(playSessionId)
  const queryClient = useQueryClient()
  const { mutate: createStoryResult } = useCreateStoryResult()
  const endCalledRef = useRef(false)
  const currentStep = Math.min(nodeData?.nodeOrder ?? 1, STORY_TOTAL_STEPS)

  const prepareStory = usePrepareStory()
  const bookRef = useRef<StoryBookHandle>(null)

  // 책에 붙어 있는 장면들 — 마지막이 지금 장면 (앞 장면은 넘김 애니메이션용으로만 남는다)
  const [spreads, setSpreads] = useState<number[]>(currentNodeId ? [currentNodeId] : [])
  // 장면별로 고른 선택지 (nodeId → choiceId) — 고른 선택지를 표시하고, 같은 장면에서 다시 고르지 못하게 한다
  const [chosen, setChosen] = useState<Record<number, string>>({})
  // isTurning: 선택 ~ 책장 넘김 완료 (선택지 잠금) / isPreparing: 선택 ~ 다음 장면 준비 완료 (준비 중 안내 표시)
  const [isTurning, setIsTurning] = useState(false)
  const [isPreparing, setIsPreparing] = useState(false)
  // 장면을 되돌릴 때마다 올려 책을 새로 펼친다
  const [bookResetKey, setBookResetKey] = useState(0)
  const pendingRef = useRef<{ nextNodeId: number; choiceText: string } | null>(null)

  // 주소가 바뀌면(브라우저 뒤로 가기 등) 그 장면부터 다시 펼친다 (렌더 중 상태 맞추기)
  // 이미 고른 선택은 서버 기록(histories)으로 다시 표시하고 잠근다 — 서버가 같은 장면의 재선택을 받지 않는다
  const [syncedNodeId, setSyncedNodeId] = useState(currentNodeId)
  if (currentNodeId !== syncedNodeId) {
    setSyncedNodeId(currentNodeId)
    if (currentNodeId && spreads[spreads.length - 1] !== currentNodeId) {
      setSpreads([currentNodeId])
      setBookResetKey((key) => key + 1)
      setChosen({})
      setIsTurning(false)
      setIsPreparing(false)
    }
  }

  // 넘김 도중 주소가 바뀌면 대기 중이던 넘김은 버린다 (돌아온 장면에서 엉뚱한 장면으로 이동하지 않도록)
  useEffect(() => {
    if (pendingRef.current && pendingRef.current.nextNodeId !== currentNodeId) {
      pendingRef.current = null
    }
  }, [currentNodeId])

  // 선택 → 다음 장면 글·그림을 미리 받아 둔 뒤 → 페이지를 넘긴다 (그림이 없는 페이지를 보여주지 않도록)
  const handleChoose = useCallback(
    (nodeId: number, choiceId: string, choiceText: string) => {
      if (
        !playSessionId ||
        nodeId !== currentNodeId ||
        pendingRef.current ||
        historyChosen?.[nodeId]
      )
        return
      setIsTurning(true)
      setIsPreparing(true)
      setChosen((prev) => ({ ...prev, [nodeId]: choiceId }))
      selectChoice(
        { playSessionId, choiceId: Number(choiceId) },
        {
          onSuccess: async ({ currentNodeId: nextNodeId }) => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.playHistories(playSessionId) })
            await prepareStory(nextNodeId, playSessionId)
            pendingRef.current = { nextNodeId, choiceText }
            setIsPreparing(false)
            setSpreads((prev) => [...prev, nextNodeId])
          },
          onError: () => {
            setIsTurning(false)
            setIsPreparing(false)
            setChosen((prev) => {
              const next = { ...prev }
              delete next[nodeId]
              return next
            })
          },
        },
      )
    },
    [currentNodeId, historyChosen, playSessionId, prepareStory, queryClient, selectChoice],
  )

  // 새 장면 페이지가 책에 붙으면 넘긴다
  useEffect(() => {
    if (!pendingRef.current) return
    const timer = window.setTimeout(() => bookRef.current?.flipNext(), 80)
    return () => window.clearTimeout(timer)
  }, [spreads])

  const handleSpreadChange = useCallback(
    (index: number) => {
      const pending = pendingRef.current
      if (!pending || index !== spreads.length - 1) return
      pendingRef.current = null
      setIsTurning(false)
      navigate(`/story/${pending.nextNodeId}`, {
        state: {
          ...state,
          selectedChoices: [...(state?.selectedChoices ?? []), pending.choiceText],
        },
      })
    },
    [navigate, spreads.length, state],
  )

  // 라이브러리가 이벤트 핸들러를 페이지 수가 바뀔 때만 다시 등록하므로 최신 함수를 ref로 넘긴다
  const spreadChangeRef = useRef(handleSpreadChange)
  const chooseRef = useRef(handleChoose)
  useLayoutEffect(() => {
    spreadChangeRef.current = handleSpreadChange
    chooseRef.current = handleChoose
  })
  const onSpreadChange = useCallback((i: number) => spreadChangeRef.current(i), [])
  const onChoose = useCallback(
    (nodeId: number, choiceId: string, text: string) => chooseRef.current(nodeId, choiceId, text),
    [],
  )

  useEffect(() => {
    if (!isFetching && nodeData?.choices.length === 0 && playSessionId && !endCalledRef.current) {
      endCalledRef.current = true
      const summary = (state?.selectedChoices ?? []).join(', ')
      // 플레이 종료(공개 여부 저장)는 결과 화면의 공개 여부 모달에서 한다
      createStoryResult({
        playSessionId,
        emotion: state?.emotionLabel ?? '',
        summary,
        advice: summary,
      })
      navigate('/result', {
        state: { playSessionId, lastNodeId: currentNodeId },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isFetching,
    nodeData,
    playSessionId,
    state?.selectedChoices,
    state?.emotionLabel,
    currentNodeId,
  ])

  const emotionLabel: string | undefined = state?.emotionLabel

  return (
    <Book
      overlay={
        <>
          <div className='absolute top-0 left-0 flex w-1/2 items-center justify-between gap-12 px-[clamp(1.6rem,2.4vw,3.2rem)] pt-[clamp(1.6rem,2.6vh,2.4rem)]'>
            {emotionLabel ? (
              <span className='flex items-center gap-8 rounded-pill border border-border bg-surface-card py-10 pr-16 pl-10 text-label text-ink-2 shadow-sm'>
                {EMOTION_FACE[emotionLabel] && (
                  <img
                    src={EMOTION_FACE[emotionLabel]}
                    alt=''
                    className='size-28 rounded-pill object-cover object-top'
                  />
                )}
                {emotionLabel} 이야기
              </span>
            ) : (
              <span />
            )}
            <button
              type='button'
              onClick={() => navigate('/emotion-select')}
              className='flex h-46 items-center gap-8 rounded-pill border border-border bg-surface-card px-24 text-label text-ink-2 shadow-sm'
            >
              <HomeIcon />
              처음으로
            </button>
          </div>

          <p className='absolute bottom-[clamp(1.2rem,2vh,2rem)] left-1/4 flex -translate-x-1/2 items-center gap-12 rounded-pill bg-surface-card px-16 py-8 text-caption text-ink-2'>
            <BookIcon />
            {currentStep} / {STORY_TOTAL_STEPS}
          </p>

          {/* 다음 장면 준비 중 — 오른쪽 페이지 위에만 살짝 덮는다. 책장이 넘어가기 시작하면 닫힌다 */}
          {isPreparing && (
            <div
              role='status'
              className='absolute inset-y-0 right-0 flex w-1/2 animate-fade-in flex-col items-center justify-center gap-12 bg-surface-page/70 backdrop-blur-[0.2rem]'
            >
              <span className='animate-pop-bounce text-display text-yellow-500'>✦</span>
              <p className='rounded-pill bg-surface-card px-20 py-10 text-label text-ink-2 shadow-sm'>
                다음 장면을 그리고 있어요…
              </p>
            </div>
          )}
        </>
      }
    >
      <StoryBook
        ref={bookRef}
        nodeIds={spreads}
        playSessionId={playSessionId}
        childName={childName}
        disabled={isTurning}
        chosen={{ ...historyChosen, ...chosen }}
        resetKey={bookResetKey}
        onChoose={onChoose}
        onSpreadChange={onSpreadChange}
      />
    </Book>
  )
}

const HomeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-24'>
    <path
      d='M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinejoin='round'
    />
  </svg>
)

const BookIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' aria-hidden className='size-18 text-ink-3'>
    <path
      d='M12 6.5C10.3 5.3 8 4.8 4 5v13c4-.2 6.3.3 8 1.5 1.7-1.2 4-1.7 8-1.5V5c-4-.2-6.3.3-8 1.5Zm0 0v13'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default StoryPage
