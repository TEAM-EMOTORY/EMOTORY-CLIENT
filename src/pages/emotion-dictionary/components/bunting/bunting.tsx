import EmotionIcon, { type EmotionKey } from '@shared/components/emotion-icon/emotion-icon'
import { cn } from '@shared/utils/cn'
import { EMOTION_FILL } from '../../constants/emotion-words'

const FLAGS: EmotionKey[] = [
  'joy',
  'sadness',
  'anger',
  'fear',
  'disgust',
  'surprise',
  'joy',
  'sadness',
  'anger',
  'fear',
]

// 아이콘을 흰색으로 그릴 때, 안쪽 눈 · 입이 묻히지 않도록 깃발 색으로 칠한다
const ICON_DETAIL: Partial<Record<EmotionKey, string>> = {
  fear: '[&_.fill-surface-card]:fill-fear-500',
  disgust: '[&_.stroke-surface-card]:stroke-disgust-500',
}

// 줄 모양 — 양 끝 y=8, 가운데로 갈수록 처지는 2차 곡선 (Figma Bunting, 폭 863 기준)
const SAG = 32
const BASE_W = 863
const curveY = (t: number) => 8 + 2 * SAG * t * (1 - t)
const curveAngle = (t: number) => (Math.atan((2 * SAG * (1 - 2 * t)) / BASE_W) * 180) / Math.PI

/** 게시판 위에 걸린 감정 깃발 가랜드 (Figma "Pennant") */
const Bunting = () => (
  <div aria-hidden className='relative h-70 shrink-0'>
    <svg
      viewBox='0 0 100 44'
      preserveAspectRatio='none'
      className='absolute inset-x-0 top-0 h-44 w-full'
    >
      <path
        d={`M0 8Q50 ${8 + SAG} 100 8`}
        className='stroke-border-strong'
        strokeWidth={3}
        strokeLinecap='round'
        fill='none'
        vectorEffect='non-scaling-stroke'
      />
    </svg>
    <ul className='absolute inset-0 flex justify-around'>
      {FLAGS.map((emotion, i) => {
        const t = (i + 0.5) / FLAGS.length
        return (
          <li
            key={i}
            className='relative h-53 w-47 origin-top'
            style={{
              translate: `0 ${(curveY(t) - 2) / 10}rem`,
              rotate: `${curveAngle(t)}deg`,
            }}
          >
            <svg viewBox='0 0 60 68' className='absolute inset-0 size-full'>
              <path d='M2 2H58L33 64Q30 69 27 64Z' className={EMOTION_FILL[emotion]} />
            </svg>
            <EmotionIcon
              emotion={emotion}
              className={cn('absolute top-11 left-14 size-19 text-white', ICON_DETAIL[emotion])}
            />
          </li>
        )
      })}
    </ul>
  </div>
)

export default Bunting
