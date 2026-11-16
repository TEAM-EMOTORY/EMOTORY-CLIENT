import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useElementSize } from '@shared/hooks/use-element-size'
import HTMLFlipBook from 'react-pageflip'
import { LeftPage, RightPage } from './story-pages'
import { StoryBookContext } from './story-book-context'

export interface StoryBookHandle {
  flipNext: () => void
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
    { nodeIds, playSessionId, childName, disabled, chosen, resetKey, onChoose, onSpreadChange },
    ref,
  ) => {
    const [containerRef, size] = useElementSize()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bookRef = useRef<any>(null)

    useImperativeHandle(ref, () => ({
      flipNext: () => bookRef.current?.pageFlip()?.flipNext('bottom'),
    }))

    const lastIndex = nodeIds.length - 1

    return (
      <StoryBookContext.Provider value={{ childName, playSessionId, disabled, chosen, onChoose }}>
        <div ref={containerRef} className='size-full'>
          {size && (
            <HTMLFlipBook
              // 화면 크기가 바뀌거나 장면을 되돌리면 새로 그린다 (현재 장면에서 다시 시작)
              key={`${size.width}x${size.height}-${resetKey}`}
              className=''
              style={{}}
              width={Math.floor(size.width / 2)}
              height={size.height}
              size='fixed'
              minWidth={0}
              maxWidth={size.width}
              minHeight={0}
              maxHeight={size.height}
              startPage={lastIndex * 2}
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
                <LeftPage key={`left-${nodeId}`} nodeId={nodeId} isCurrent={i === lastIndex} />,
                <RightPage key={`right-${nodeId}`} nodeId={nodeId} />,
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
