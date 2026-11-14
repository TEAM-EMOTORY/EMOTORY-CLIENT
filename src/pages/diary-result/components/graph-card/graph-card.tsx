import { cn } from '@shared/utils/cn'
import { EMOTION_RESULTS, type DiaryEmotion } from './constants'

const getBarStyles = (id: DiaryEmotion, count: number, barHeight: number, index: number) => {
  const characterBottom = id === 'joy' ? (count === 0 ? -1.6 : -0.8) : count === 0 ? -3.2 : -2.4
  return {
    bar: { height: `${barHeight}%`, animationDelay: `${0.3 + index * 0.2}s` },
    character: {
      bottom: `calc(${barHeight}% + ${characterBottom}rem)`,
      animationDelay: `${0.7 + index * 0.2}s`,
      ...(id === 'joy' && { left: '54%' }),
    },
    count: {
      bottom: `calc(${barHeight}% + ${count === 0 ? 7.6 : 9}rem)`,
      animationDelay: `${0.8 + index * 0.2}s`,
    },
  }
}

interface GraphCardProps {
  counts: Record<DiaryEmotion, number>
  maxCount: number
  childName: string
  hasConsonant: boolean
}

const GraphCard = ({ counts, maxCount, childName, hasConsonant }: GraphCardProps) => (
  <section className='relative flex min-h-0 flex-col items-center rounded-lg border-[1.5px] border-border bg-white/68 px-[clamp(1.6rem,2.5vw,3.2rem)] pt-[clamp(3rem,5vh,6rem)] pb-[clamp(1.2rem,2vh,2.4rem)]'>
    <div className='absolute -top-22 left-1/2 flex min-w-240 -translate-x-1/2 items-center justify-center gap-12 rounded-pill border-[1.5px] border-border bg-surface-card px-32 py-12 text-subtitle text-on-primary shadow-sm'>
      <span>▮</span>
      <span>오늘의 감정 그래프</span>
    </div>
    <p className='mb-[clamp(0.8rem,1.5vh,2rem)] text-body text-ink-2'>
      {childName}{hasConsonant ? '이가' : '가'} 느낀 감정들을 확인해볼까요?
    </p>

    <div className='relative min-h-0 w-full flex-1 pt-[clamp(4rem,7vh,7rem)] pr-20 pl-40'>
      <div className='absolute top-80 bottom-88 left-32 w-2 bg-linear-to-b from-border/20 via-border to-border/20' />
      <div className='absolute top-[clamp(4rem,7vh,7rem)] right-20 bottom-0 left-60 grid grid-cols-3 gap-[clamp(1.6rem,5vw,5.2rem)] border-b-[1.5px] border-border'>
        {EMOTION_RESULTS.map(({ id, label, characterImg, iconImg, barClassName }, index) => {
          const count = counts[id]
          const barHeight = Math.max((count / maxCount) * 58, count > 0 ? 18 : 7)
          const barStyles = getBarStyles(id, count, barHeight, index)

          return (
            <div key={id} className='relative flex h-full min-w-0 flex-col items-center justify-end'>
              <div className='relative flex min-h-0 w-full flex-1 items-end justify-center'>
                <div className='absolute left-1/2 z-4 flex min-h-[clamp(4.4rem,10%,5.6rem)] min-w-[clamp(4.8rem,44%,6.4rem)] animate-fade-slide-up items-center justify-center gap-2 rounded-sm border-[1.5px] border-border bg-surface-card px-[clamp(0.8rem,1vw,1rem)] py-6 text-center text-[clamp(2rem,2.2vw,2.4rem)] font-extrabold text-ink shadow-sm after:absolute after:-bottom-7 after:left-1/2 after:size-12 after:-translate-x-1/2 after:rotate-45 after:border-r-[1.5px] after:border-b-[1.5px] after:border-border after:bg-surface-card' style={barStyles.count}>
                  <span className='leading-none'>{count}</span>
                  <span className='text-[clamp(1.5rem,1.6vw,1.8rem)] leading-none font-extrabold'>개</span>
                </div>
                <div className='absolute left-1/2 z-3 flex h-[clamp(6rem,24%,9.6rem)] w-[clamp(6.8rem,68%,11.2rem)] animate-pop-in items-end justify-center drop-shadow-[0_0.7rem_0.8rem_rgba(104,70,43,0.14)]' style={barStyles.character}>
                  <img src={characterImg} alt='' className='h-full w-auto max-w-full object-contain' />
                </div>
                <div
                  className={cn(
                    'relative z-1 min-h-[clamp(2.4rem,7%,3.2rem)] w-[clamp(5.6rem,58%,9.8rem)] origin-bottom animate-bar-grow rounded-t-sm shadow-[inset_0_0.4rem_1.2rem_rgba(255,255,255,0.34)]',
                    barClassName,
                  )} style={barStyles.bar} />
              </div>
              <img src={iconImg} alt='' className='mt-16 aspect-square w-[clamp(3.4rem,34%,4.8rem)] object-contain' />
              <span className='mt-4 text-label text-ink'>{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default GraphCard
