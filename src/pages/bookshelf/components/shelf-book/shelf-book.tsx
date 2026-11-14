import EmotionIcon from '@shared/components/emotion-icon/emotion-icon'
import { cn } from '@shared/utils/cn'
import type { SharedStory } from '../../apis/shared-stories'
import { EMOTION_THEME } from '../../constants/emotion'

interface ShelfBookProps {
  story: SharedStory
  className?: string
}

/** 책장에 표지가 보이게 꽂힌 공유 이야기 한 권 (Figma "Shelf book") */
const ShelfBook = ({ story, className }: ShelfBookProps) => {
  const theme = EMOTION_THEME[story.emotion] ?? EMOTION_THEME.HAPPY

  return (
    <article
      className={cn(
        'relative aspect-[148/204] w-full overflow-hidden rounded-r-[1rem] rounded-l-[0.3rem] bg-surface-inset shadow-[0.3rem_0.4rem_0.8rem_rgb(59_42_26/0.28)]',
        className,
      )}
    >
      {story.imageUrl && (
        <img src={story.imageUrl} alt='' loading='lazy' className='size-full object-cover' />
      )}
      {/* 책등 · 접힘 그림자 · 표지 광택 */}
      <span aria-hidden className={cn('absolute inset-y-0 left-0 w-12', theme.spine)} />
      <span
        aria-hidden
        className='absolute inset-y-0 left-12 w-14 bg-linear-to-r from-ink/35 to-transparent'
      />
      <span
        aria-hidden
        className='absolute inset-0 left-12 bg-linear-135 from-white/22 via-transparent via-45% to-transparent'
      />

      <span
        aria-hidden
        className={cn(
          'absolute top-8 right-8 flex size-30 items-center justify-center rounded-pill border-2 bg-surface-card',
          theme.badge,
        )}
      >
        <EmotionIcon emotion={theme.key} className='size-18' />
      </span>

      <div className='absolute inset-x-8 bottom-8 left-20 flex flex-col gap-2 rounded-sm bg-surface-card/94 px-10 py-8'>
        <h3 className='line-clamp-2 break-keep text-caption leading-[1.3] font-extrabold text-ink'>
          {story.title}
        </h3>
        <p className='text-[1.2rem] text-ink-3'>{story.name}의 이야기</p>
      </div>
    </article>
  )
}

export default ShelfBook
