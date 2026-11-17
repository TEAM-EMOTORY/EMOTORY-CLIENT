import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
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
import { useDelayedFlag } from '@shared/hooks/use-delayed-flag'
import { useStoryNode } from './hooks/use-story-node'
import type { StoryNodeResponse } from './apis/story-nodes'
import { useSelectChoice } from './hooks/use-select-choice'
import { usePlayHistories, usePlaySession } from './hooks/use-play-histories'
import { useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@shared/apis/config/query-keys'

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
  const { data: histories } = usePlayHistories(playSessionId)
  const { data: playSession } = usePlaySession(playSessionId)
  const queryClient = useQueryClient()

  // 이미 고른 선택 (nodeId → choiceId) — 지난 장면으로 돌아오면 고른 선택을 보여주고 잠근다 (서버가 재선택을 받지 않는다)
  const historyChosen = useMemo(
    () =>
      Object.fromEntries(
        (histories ?? []).map(({ nodeId, choiceId }) => [nodeId, String(choiceId)]),
      ) as Record<number, string>,
    [histories],
  )
  // 지나온 장면 순서 — 선택한 장면들 + 세션이 지금 머문 장면. 책에 모두 붙여 두고 양끝으로 넘겨 본다
  const visitedPath = useMemo(() => {
    const path = (histories ?? []).map(({ nodeId }) => nodeId)
    const lastNodeId = playSession?.currentNodeId
    if (lastNodeId && path[path.length - 1] !== lastNodeId) path.push(lastNodeId)
    return path
  }, [histories, playSession?.currentNodeId])
  const endCalledRef = useRef(false)
  const currentStep = Math.min(nodeData?.nodeOrder ?? 1, STORY_TOTAL_STEPS)

  const prepareStory = usePrepareStory()
  const bookRef = useRef<StoryBookHandle>(null)

  // 책에 붙어 있는 장면들 — 지나온 장면 전체, 마지막이 세션이 머문 장면 (새 선택지는 여기서만 고를 수 있다)
  const [spreads, setSpreads] = useState<number[]>(currentNodeId ? [currentNodeId] : [])
  // 책이 펼치고 있는 장면 순번 / 책을 새로 펼칠 때 시작할 장면 순번
  const [shownIndex, setShownIndex] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  // 양끝을 눌러 넘기는 중 (넘김이 끝날 때까지 다시 누르지 못하게)
  const [isFlipping, setIsFlipping] = useState(false)
  // 장면별로 고른 선택지 (nodeId → choiceId) — 고른 선택지를 표시하고, 같은 장면에서 다시 고르지 못하게 한다
  const [chosen, setChosen] = useState<Record<number, string>>({})
  // isTurning: 선택 ~ 책장 넘김 완료 (선택지 잠금) / isPreparing: 선택 ~ 다음 장면 준비 완료 (준비 중 안내 표시)
  const [isTurning, setIsTurning] = useState(false)
  const [isPreparing, setIsPreparing] = useState(false)
  // 책에 붙은 장면 구성이 통째로 바뀔 때마다 올려 책을 새로 펼친다
  const [bookResetKey, setBookResetKey] = useState(0)
  const pendingRef = useRef<{ nextNodeId: number; choiceText: string } | null>(null)
  // 주소에 맞추려고 넘기고 있는 장면 순번 (같은 넘김을 여러 번 요청하지 않도록)
  const flipTargetRef = useRef<number | null>(null)
  // 넘김이 끝나 주소를 바꾸러 간 장면 — 주소가 따라올 때까지 책을 되넘기지 않는다
  const awaitingNodeRef = useRef<number | null>(null)

  const resetBook = (nodeIds: number[], index: number) => {
    setSpreads(nodeIds)
    setStartIndex(index)
    setShownIndex(index)
    setBookResetKey((key) => key + 1)
    setIsFlipping(false)
  }

  // 지나온 장면 기록이 오면 책에 모두 붙인다 — 이어하기로 중간 장면부터 들어와도 앞 장면을 넘겨 볼 수 있다
  // (선택 후 넘기는 중에는 건드리지 않는다. 넘김이 끝나면 기록과 책이 같아진다)
  const isPathSynced =
    visitedPath.length === spreads.length && visitedPath.every((id, i) => id === spreads[i])
  if (
    !isPathSynced &&
    !isTurning &&
    !isPreparing &&
    currentNodeId &&
    visitedPath.includes(currentNodeId)
  ) {
    resetBook(visitedPath, visitedPath.indexOf(currentNodeId))
  }

  // 주소가 바뀌면(브라우저 뒤로·앞으로 가기 등) 그 장면을 펼친다 (렌더 중 상태 맞추기)
  const [syncedNodeId, setSyncedNodeId] = useState(currentNodeId)
  if (currentNodeId !== syncedNodeId) {
    setSyncedNodeId(currentNodeId)
    if (currentNodeId && !spreads.includes(currentNodeId)) {
      // 책에 없는 장면이면 그 장면만 펼쳐 두고, 기록이 오면 위에서 다시 맞춘다
      resetBook([currentNodeId], 0)
      setChosen({})
      setIsTurning(false)
      setIsPreparing(false)
    }
  }

  // 책을 새로 펼치면 진행 중이던 넘김 요청은 잊는다
  useEffect(() => {
    flipTargetRef.current = null
    awaitingNodeRef.current = null
  }, [bookResetKey])

  // 책에 있는 장면으로 주소가 바뀌었는데(브라우저 뒤로·앞으로 가기) 다른 장면을 펼치고 있으면 넘김 효과로 그 장면까지 넘긴다
  useEffect(() => {
    if (awaitingNodeRef.current !== null) {
      if (awaitingNodeRef.current !== currentNodeId) return
      awaitingNodeRef.current = null
    }
    if (!currentNodeId || pendingRef.current || isFlipping) return
    const index = spreads.indexOf(currentNodeId)
    if (index < 0 || index === shownIndex || flipTargetRef.current === index) return
    flipTargetRef.current = index
    bookRef.current?.flipTo(index)
  }, [currentNodeId, spreads, shownIndex, isFlipping])

  // 넘김 도중 주소가 바뀌면 대기 중이던 넘김은 버린다 (돌아온 장면에서 엉뚱한 장면으로 이동하지 않도록)
  useEffect(() => {
    if (pendingRef.current && pendingRef.current.nextNodeId !== currentNodeId) {
      pendingRef.current = null
    }
  }, [currentNodeId])

  // 선택 → 다음 장면 글·그림을 미리 받아 둔 뒤 → 페이지를 넘긴다 (그림이 없는 페이지를 보여주지 않도록)
  const handleChoose = useCallback(
    (nodeId: number, choiceId: string, choiceText: string) => {
      if (!playSessionId || nodeId !== currentNodeId || pendingRef.current || historyChosen[nodeId])
        return
      setIsTurning(true)
      setIsPreparing(true)
      setChosen((prev) => ({ ...prev, [nodeId]: choiceId }))
      selectChoice(
        { playSessionId, choiceId: Number(choiceId) },
        {
          onSuccess: async ({ currentNodeId: nextNodeId }) => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.playHistories(playSessionId) })
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.playSession(playSessionId) })
            await prepareStory(nextNodeId, playSessionId)
            // 다음 장면이 결말(선택지 없음)이면 책장을 넘기지 않고 바로 결과 화면으로 간다 — 결말 장면이 잠깐 보이지 않도록
            const nextNode = queryClient.getQueryData<StoryNodeResponse>(
              QUERY_KEYS.storyNode(nextNodeId),
            )
            if (nextNode?.choices.length === 0) {
              endCalledRef.current = true
              navigate('/result', { state: { playSessionId, lastNodeId: nextNodeId } })
              return
            }
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
    [
      currentNodeId,
      historyChosen,
      navigate,
      playSessionId,
      prepareStory,
      queryClient,
      selectChoice,
    ],
  )

  // 새 장면 페이지가 책에 붙으면 넘긴다
  useEffect(() => {
    if (!pendingRef.current) return
    const timer = window.setTimeout(() => bookRef.current?.flipNext(), 80)
    return () => window.clearTimeout(timer)
  }, [spreads])

  const handleSpreadChange = useCallback(
    (index: number) => {
      setShownIndex(index)
      setIsFlipping(false)
      flipTargetRef.current = null
      const pending = pendingRef.current
      if (pending) {
        // 선택지를 골라 새 장면으로 넘긴 경우
        if (index !== spreads.length - 1) return
        pendingRef.current = null
        awaitingNodeRef.current = pending.nextNodeId
        setIsTurning(false)
        navigate(`/story/${pending.nextNodeId}`, {
          state: {
            ...state,
            selectedChoices: [...(state?.selectedChoices ?? []), pending.choiceText],
          },
        })
        return
      }
      // 양끝을 눌러 지나온 장면으로 넘긴 경우 — 주소만 맞춘다 (보기만 하는 이동이라 기록을 쌓지 않는다)
      const nodeId = spreads[index]
      if (nodeId && nodeId !== currentNodeId) {
        awaitingNodeRef.current = nodeId
        navigate(`/story/${nodeId}`, { state, replace: true })
      }
    },
    [currentNodeId, navigate, spreads, state],
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

  useEffect(
    function navigateToStoryResult() {
      if (!isFetching && nodeData?.choices.length === 0 && playSessionId && !endCalledRef.current) {
        endCalledRef.current = true
        navigate('/result', {
          state: { playSessionId, lastNodeId: currentNodeId },
        })
      }
    },
    [isFetching, nodeData?.choices.length, playSessionId, navigate, currentNodeId],
  )

  // 책 양끝 — 이미 지나온 장면 사이에서만 넘김 효과로 앞뒤로 넘긴다 (새 장면은 선택지를 골라야 열린다)
  const isBusy = isTurning || isPreparing || isFlipping
  const flipBy = (step: -1 | 1) => {
    const target = shownIndex + step
    if (isBusy || target < 0 || target >= spreads.length) return undefined
    return () => {
      setIsFlipping(true)
      if (step < 0) bookRef.current?.flipPrev()
      else bookRef.current?.flipNext()
    }
  }

  // 다음 장면이 금방 준비되면(서버에 이미 있는 그림) 준비 중 안내를 띄우지 않는다
  const showPreparing = useDelayedFlag(isPreparing, 600)

  const emotionLabel: string | undefined = state?.emotionLabel

  return (
    <Book
      onPrev={flipBy(-1)}
      onNext={flipBy(1)}
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
          {showPreparing && (
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
        startIndex={startIndex}
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
