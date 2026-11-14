import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
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
  /** 넘김이 끝났을 때 — 펼쳐진 장면의 순번(0부터) */
  onSpreadChange: (spreadIndex: number) => void
}

const FLIP_MS = 900

/** 부모 크기를 재서 책 넘김 라이브러리에 넘긴다 (라이브러리는 고정 px만 받는다) */
const useElementSize = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width: Math.floor(width), height: Math.floor(height) })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, size] as const
}

/**
 * 장면 하나 = 펼친 두 페이지(왼쪽 글 · 오른쪽 그림).
 * 손으로 끌어 넘기는 기능은 끄고(선택지 버튼과 겹치지 않도록), 코드로만 넘긴다.
 */
const StoryBook = forwardRef<StoryBookHandle, StoryBookProps>(
  ({ nodeIds, playSessionId, childName, disabled, chosen, onChoose, onSpreadChange }, ref) => {
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
              // 화면 크기가 바뀌면 새로 그린다 (현재 장면에서 다시 시작)
              key={`${size.width}x${size.height}`}
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
