import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useElementSize } from '@shared/hooks/use-element-size'
import HTMLFlipBook from 'react-pageflip'
import { LeftPage, RightPage } from './story-pages'
import { StoryBookContext } from './story-book-context'

export interface StoryBookHandle {
  /** 한 장면 앞/뒤로 넘긴다 — 넘김이 시작되지 않았으면 false (넘김 완료 이벤트가 오지 않는다) */
  flipNext: () => boolean
  flipPrev: () => boolean
  /** 넘김 효과로 해당 장면(순번)까지 넘긴다 — 넘김이 안 되면 효과 없이 바로 펼친다. 책이 없으면 false */
  flipTo: (spreadIndex: number) => boolean
  /**
   * 마지막(새로 붙은) 장면으로 넘김 효과로 넘긴다.
   * 넘김이 시작됐으면(또는 이미 그 장면이면) true — false면 아직 책이 준비되지 않은 것이니 잠시 뒤 다시 부른다
   */
  flipToLast: () => boolean
  /** 넘김 효과 없이 마지막 장면을 바로 펼친다 (넘김이 계속 실패할 때 마지막 수단) — 펼쳤으면 true */
  jumpToLast: () => boolean
}

interface StoryBookProps {
  /** 지금까지 펼친 장면들 (마지막이 현재 장면) */
  nodeIds: number[]
  playSessionId?: number
  childName: string
  disabled: boolean
  chosen: Record<number, string>
  onChoose: (nodeId: number, choiceId: string, choiceText: string) => void
  /** 바뀌면 책을 새로 펼친다 — 지난 장면으로 돌아와 장면 수가 줄었을 때 빈 페이지가 남지 않도록 */
  resetKey: number
  /** 책을 새로 펼칠 때 처음 보여줄 장면 순번 */
  startIndex: number
  /** 넘김이 끝났을 때 — 펼쳐진 장면의 순번(0부터) */
  onSpreadChange: (spreadIndex: number) => void
}

const FLIP_MS = 900

/**
 * 장면 하나 = 펼친 두 페이지(왼쪽 글 · 오른쪽 그림).
 * 손으로 끌어 넘기는 기능은 끄고(선택지 버튼과 겹치지 않도록), 코드로만 넘긴다.
 */
const StoryBook = forwardRef<StoryBookHandle, StoryBookProps>(
  (
    {
      nodeIds,
      playSessionId,
      childName,
      disabled,
      chosen,
      resetKey,
      startIndex,
      onChoose,
      onSpreadChange,
    },
    ref,
  ) => {
    const [containerRef, size] = useElementSize()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bookRef = useRef<any>(null)

    const lastIndex = nodeIds.length - 1

    /**
     * 책 넘김 엔진(page-flip)이 실제 페이지 수와 같은 페이지를 알고 있게 맞춘 뒤 엔진을 돌려준다.
     * react-pageflip은 페이지 수가 바뀐 렌더와 다른 리렌더가 한 번에 커밋되면
     * 새 페이지 등록(updateFromHtml)을 건너뛰는 버그가 있어, 새 장면을 붙여도 엔진은 모르는 채로 남는다
     * (그러면 flipNext가 아무 일도 하지 않아 책장이 넘어가지 않는다). 그때는 직접 등록한다.
     */
    const getSyncedFlip = () => {
      const flip = bookRef.current?.pageFlip()
      if (!flip?.getFlipController()) return null
      const expected = nodeIds.length * 2
      if (flip.getPageCount() !== expected) {
        const pages = Array.from(
          containerRef.current?.querySelectorAll<HTMLElement>('[data-book-page]') ?? [],
        ).sort((a, b) => Number(a.dataset.bookPage) - Number(b.dataset.bookPage))
        if (pages.length !== expected) return null
        flip.updateFromHtml(pages)
      }
      return flip
    }

    useImperativeHandle(ref, () => ({
      flipNext: () => {
        const flip = getSyncedFlip()
        if (!flip || flip.getState() === 'flipping') return false
        flip.flipNext('bottom')
        return flip.getState() === 'flipping'
      },
      flipPrev: () => {
        const flip = getSyncedFlip()
        if (!flip || flip.getState() === 'flipping') return false
        flip.flipPrev('bottom')
        return flip.getState() === 'flipping'
      },
      flipTo: (spreadIndex: number) => {
        const flip = getSyncedFlip()
        if (!flip) return false
        if (flip.getState() !== 'flipping') flip.flip(spreadIndex * 2, 'bottom')
        // 넘김이 시작되지 않았으면 효과 없이 펼친다 (flip 이벤트가 나서 넘김 완료로 처리된다)
        if (flip.getState() !== 'flipping') flip.turnToPage(spreadIndex * 2)
        return true
      },
      flipToLast: () => {
        const flip = getSyncedFlip()
        if (!flip) return false
        if (flip.getState() === 'flipping') return true
        const lastPage = lastIndex * 2
        // 이미 마지막 장면이 펼쳐져 있으면 넘김 완료를 알리도록 다시 펼친다 (flip 이벤트가 난다)
        if (flip.getCurrentPageIndex() >= lastPage) {
          flip.turnToPage(lastPage)
          return true
        }
        flip.flipNext('bottom')
        return flip.getState() === 'flipping'
      },
      jumpToLast: () => {
        const flip = getSyncedFlip()
        if (!flip) return false
        flip.turnToPage(lastIndex * 2)
        return true
      },
    }))

    return (
      <StoryBookContext.Provider value={{ childName, playSessionId, disabled, chosen, onChoose }}>
        <div ref={containerRef} className='size-full'>
          {size && (
            <HTMLFlipBook
              // 화면 크기가 바뀌거나 장면을 되돌리면 새로 그린다 (현재 장면에서 다시 시작)
              key={`${size.width}x${size.height}-${resetKey}`}
              className='flip-book'
              style={{}}
              width={Math.floor(size.width / 2)}
              height={size.height}
              size='fixed'
              minWidth={0}
              maxWidth={size.width}
              minHeight={0}
              maxHeight={size.height}
              startPage={startIndex * 2}
              showCover={false}
              usePortrait={false}
              autoSize={false}
              drawShadow
              maxShadowOpacity={0.45}
              flippingTime={FLIP_MS}
              startZIndex={0}
              useMouseEvents={false}
              mobileScrollSupport={false}
              clickEventForward
              swipeDistance={30}
              showPageCorners={false}
              disableFlipByClick
              renderOnlyPageLengthChange
              onFlip={(e: { data: number }) => onSpreadChange(Math.floor(e.data / 2))}
              ref={bookRef}
            >
              {nodeIds.flatMap((nodeId, i) => [
                <LeftPage
                  key={`left-${nodeId}`}
                  nodeId={nodeId}
                  pageIndex={i * 2}
                  isCurrent={i === lastIndex}
                />,
                <RightPage key={`right-${nodeId}`} nodeId={nodeId} pageIndex={i * 2 + 1} />,
              ])}
            </HTMLFlipBook>
          )}
        </div>
      </StoryBookContext.Provider>
    )
  },
)
StoryBook.displayName = 'StoryBook'

export default StoryBook
