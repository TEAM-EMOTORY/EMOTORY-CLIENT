import { forwardRef, useImperativeHandle, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import EmotionIcon from '@shared/components/emotion-icon/emotion-icon'
import { useElementSize } from '@shared/hooks/use-element-size'
import { hasConsonantEnding, replaceNameInContent } from '@shared/utils/korean-particle'
import { cn } from '@shared/utils/cn'
import StoryText from '@pages/story/components/story-text/story-text'
import type { SharedStoryDetail } from '../../apis/shared-stories'
import { EMOTION_THEME } from '../../constants/emotion'
import FadeInImage from '@shared/components/fade-in-image/fade-in-image'

export interface StoryReaderHandle {
  flipNext: () => void
  flipPrev: () => void
}

interface StoryReaderProps {
  story: SharedStoryDetail
  onSpreadChange: (spreadIndex: number) => void
  onBackToShelf: () => void
}

const ORDINALS = ['첫', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열']
const sceneLabel = (index: number, total: number) =>
  index === total - 1 ? '마지막 장면' : `${ORDINALS[index] ?? index + 1} 번째 장면`

const PAGE_PADDING =
  'px-[clamp(2.4rem,3.2vw,4rem)] pt-[clamp(8rem,11vh,9.6rem)] pb-[clamp(5.6rem,8vh,7.2rem)]'

/**
 * 공유된 이야기를 읽는 책 (Figma 08B).
 * 장면 하나 = 펼친 두 페이지(왼쪽 글 · 오른쪽 그림), 마지막에 "이야기 끝" 페이지.
 * 누를 선택지가 없으므로 손가락으로 밀어서 넘기는 기능도 켠다.
 */
const StoryReader = forwardRef<StoryReaderHandle, StoryReaderProps>(
  ({ story, onSpreadChange, onBackToShelf }, ref) => {
    const [containerRef, size] = useElementSize()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bookRef = useRef<any>(null)

    useImperativeHandle(ref, () => ({
      flipNext: () => bookRef.current?.pageFlip()?.flipNext('bottom'),
      flipPrev: () => bookRef.current?.pageFlip()?.flipPrev('bottom'),
    }))

    const theme = EMOTION_THEME[story.emotion] ?? EMOTION_THEME.HAPPY
    const byline = `${story.name}${hasConsonantEnding(story.name) ? '이가' : '가'} 만든 ${theme.label} 이야기`
    const total = story.nodes.length

    return (
      <div ref={containerRef} className='size-full'>
        {size && (
          <HTMLFlipBook
            key={`${size.width}x${size.height}`}
            className='flip-book'
            style={{}}
            width={Math.floor(size.width / 2)}
            height={size.height}
            size='fixed'
            minWidth={0}
            maxWidth={size.width}
            minHeight={0}
            maxHeight={size.height}
            startPage={0}
            showCover={false}
            usePortrait={false}
            autoSize={false}
            drawShadow
            maxShadowOpacity={0.45}
            flippingTime={900}
            startZIndex={0}
            useMouseEvents
            mobileScrollSupport={false}
            clickEventForward
            swipeDistance={30}
            showPageCorners
            disableFlipByClick
            renderOnlyPageLengthChange
            onFlip={(e: { data: number }) => onSpreadChange(Math.floor(e.data / 2))}
            ref={bookRef}
          >
            {[
              ...story.nodes.flatMap((node, i) => [
                <TextPage key={`text-${node.id}`}>
                  <div className='flex flex-col gap-10'>
                    <p className='flex items-center gap-8 text-caption text-ink-3'>
                      <span
                        className={cn(
                          'flex size-30 items-center justify-center rounded-pill border-2 bg-surface-card',
                          theme.badge,
                        )}
                      >
                        <EmotionIcon emotion={theme.key} className='size-18' />
                      </span>
                      {byline}
                    </p>
                    <p className='text-caption text-accent-text'>{sceneLabel(i, total)}</p>
                  </div>
                  <StoryText
                    title={story.title}
                    content={replaceNameInContent(node.story, story.name)}
                  />
                </TextPage>,
                <ImagePage key={`image-${node.id}`} src={node.imgSrc} />,
              ]),
              <TextPage key='end-text' center>
                <span aria-hidden className='animate-pop-bounce text-display text-yellow-500'>
                  ✦
                </span>
                <p className='text-title text-ink'>이야기 끝</p>
                <p className='break-keep text-body text-ink-2'>
                  {story.name}의 {theme.label} 이야기를 다 읽었어요.
                </p>
                <button
                  type='button'
                  onClick={onBackToShelf}
                  className='mt-12 flex h-60 items-center justify-center rounded-pill border-[1.5px] border-yellow-700 bg-yellow-500 px-32 text-label text-on-primary shadow-primary'
                >
                  책장으로 돌아가기
                </button>
              </TextPage>,
              <ImagePage key='end-image' src={story.nodes[total - 1]?.imgSrc} faded />,
            ]}
          </HTMLFlipBook>
        )}
      </div>
    )
  },
)
StoryReader.displayName = 'StoryReader'

/** 왼쪽 페이지 — 종이 + 접힘 그림자 */
const TextPage = forwardRef<HTMLDivElement, { children: React.ReactNode; center?: boolean }>(
  ({ children, center }, ref) => (
    <div ref={ref} className='size-full overflow-hidden bg-surface-card'>
      <div className='relative flex size-full flex-col'>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-linear-to-r from-ink/6 to-transparent to-12%'
        />
        <div
          className={cn(
            'relative flex min-h-0 flex-1 flex-col justify-center gap-20 overflow-y-auto',
            center && 'items-center text-center',
            PAGE_PADDING,
          )}
        >
          {children}
        </div>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-linear-to-r from-transparent via-ink/10 via-75% to-ink/28'
        />
      </div>
    </div>
  ),
)
TextPage.displayName = 'TextPage'

/** 오른쪽 페이지 — 장면 그림 */
const ImagePage = forwardRef<HTMLDivElement, { src?: string; faded?: boolean }>(
  ({ src, faded }, ref) => (
    <div ref={ref} className='size-full overflow-hidden bg-surface-page'>
      <div className='relative size-full'>
        <FadeInImage
          src={src}
          className='size-full'
          imgClassName={cn(faded && 'blur-[0.2rem]')}
          placeholder={<div className='size-full animate-pulse bg-surface-inset' />}
        />
        {faded && <div aria-hidden className='absolute inset-0 bg-surface-page/60' />}
        <div
          aria-hidden
          className='pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-linear-to-r from-ink/45 via-ink/18 via-25% to-transparent'
        />
      </div>
    </div>
  ),
)
ImagePage.displayName = 'ImagePage'

export default StoryReader
