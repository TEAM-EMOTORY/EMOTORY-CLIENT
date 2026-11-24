import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@shared/utils/cn'
import type { FaceKey } from '../../constants/emotion-words'

// Figma "Face / *" 컴포넌트와 같은 아이 얼굴 (viewBox 80×80)
const SKIN = '#FDE3CC'
const EAR = '#F7D2B4'
const HAIR = '#5B3A29'
const MOUTH = '#E9727A'
const MOUTH_LINE = '#B5454D'
const TEAR = '#8EC5F5'
const BLUSH = '#FF9A9A'
const WHITE = '#fff'

const Line = ({ d, w = 2.4 }: { d: string; w?: number }) => (
  <path
    d={d}
    className='stroke-ink'
    strokeWidth={w}
    strokeLinecap='round'
    strokeLinejoin='round'
    fill='none'
  />
)

/** 점 눈 */
const Dot = ({ x, y, r = 2.8 }: { x: number; y: number; r?: number }) => (
  <circle cx={x} cy={y} r={r} className='fill-ink' />
)

/** 하이라이트가 들어간 반짝이는 눈 */
const Shine = ({ x, y, r = 3.4 }: { x: number; y: number; r?: number }) => (
  <>
    <circle cx={x} cy={y} r={r} className='fill-ink' />
    <circle cx={x + 1.1} cy={y - 1.2} r={r * 0.38} fill={WHITE} />
  </>
)

/** 동그랗게 뜬 눈 */
const Ring = ({ x, y }: { x: number; y: number }) => (
  <>
    <circle cx={x} cy={y} r={4.6} fill={WHITE} className='stroke-ink' strokeWidth={1.8} />
    <circle cx={x} cy={y + 0.4} r={2} className='fill-ink' />
  </>
)

/** 분홍색으로 벌린 입 */
const Mouth = ({ d }: { d: string }) => (
  <path d={d} fill={MOUTH} stroke={MOUTH_LINE} strokeWidth={1.4} strokeLinejoin='round' />
)

const Cheeks = ({ o = 0.55, rx = 5, ry = 3 }: { o?: number; rx?: number; ry?: number }) => (
  <>
    <ellipse cx={22} cy={54} rx={rx} ry={ry} fill={BLUSH} opacity={o} />
    <ellipse cx={58} cy={54} rx={rx} ry={ry} fill={BLUSH} opacity={o} />
  </>
)

/** 볼 빗금 (부끄러움) */
const Hatch = () => (
  <path
    d='M18 54l2.6-2.6M22 55l2.6-2.6M55 55l2.6-2.6M59 54l2.6-2.6'
    stroke='#E2605F'
    strokeWidth={1.2}
    strokeLinecap='round'
  />
)

/** 눈물 · 땀방울 */
const Drop = ({ x, y }: { x: number; y: number }) => (
  <path d={`M${x} ${y}q3.4 4.6 0 7.2q-3.4-2.6 0-7.2Z`} fill={TEAR} />
)

/** 반짝이 */
const Sparkle = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <path
    d={`M${x} ${y - 5 * s}l${1.4 * s} ${3.6 * s} ${3.6 * s} ${1.4 * s}-${3.6 * s} ${1.4 * s}-${1.4 * s} ${3.6 * s}-${1.4 * s}-${3.6 * s}-${3.6 * s}-${1.4 * s} ${3.6 * s}-${1.4 * s}Z`}
    className='fill-yellow-500'
  />
)

/** 눈썹 (둥근 아치) */
const Brows = ({ y = 40 }: { y?: number }) => (
  <Line d={`M27 ${y}q4-2.5 8 0M45 ${y}q4-2.5 8 0`} w={1.8} />
)

/** 질끈 감은 > < 눈 */
const Squeeze = () => <Line d='M27 45l7 2.8-7 2.8M53 45l-7 2.8 7 2.8' />

/** 머리 · 귀 · 얼굴 */
const Head = () => (
  <>
    <ellipse cx={10.5} cy={47} rx={5.5} ry={7} fill={EAR} />
    <ellipse cx={69.5} cy={47} rx={5.5} ry={7} fill={EAR} />
    <ellipse cx={40} cy={46} rx={30} ry={29} fill={SKIN} />
    <path
      d='M9.5 44C8 19 22 7 40 7C58 7 72 19 70.5 44C69 39 67 35 64.5 32L61 37.5L57 31L52.5 37L48 30L43.5 36.5L39 29.5L34.5 36.5L30 30.5L25.5 37L22 31.5L17 37C14 39 11.5 41.5 9.5 44Z'
      fill={HAIR}
    />
    <path
      d='M27 16Q33 11 40 10.5'
      stroke={WHITE}
      strokeOpacity={0.3}
      strokeWidth={2.4}
      strokeLinecap='round'
      fill='none'
    />
  </>
)

const FACES: Record<FaceKey, ReactNode> = {
  // 기쁨
  glad: (
    <>
      <Brows />
      <Shine x={31} y={47} />
      <Shine x={49} y={47} />
      <Mouth d='M35 55Q40 62.5 45 55Z' />
      <Cheeks />
    </>
  ),
  excited: (
    <>
      <Line d='M27 48q4-5 8 0M45 48q4-5 8 0' />
      <Mouth d='M33 54Q40 66 47 54Z' />
      <Cheeks o={0.6} />
      <Sparkle x={70} y={12} s={1.1} />
      <Sparkle x={11} y={20} s={0.7} />
    </>
  ),
  happy: (
    <>
      <Brows />
      <Line d='M27 46q4 4 8 0M45 46q4 4 8 0' />
      <Line d='M35.5 56q4.5 4 9 0' />
      <Cheeks o={0.75} />
    </>
  ),
  // 슬픔
  sad: (
    <>
      <Line d='M27 41l8-2.6M45 38.4l8 2.6' w={1.8} />
      <Shine x={31} y={47} />
      <Shine x={49} y={47} />
      <Line d='M35.5 60q4.5-4 9 0' />
      <Drop x={50} y={51} />
    </>
  ),
  upset: (
    <>
      <Dot x={31} y={48} />
      <Dot x={49} y={48} />
      <Line d='M26.5 45h9M44.5 45h9' w={2.2} />
      <Line d='M27 40l8 1.6M53 40l-8 1.6' w={1.8} />
      <Line d='M35 58.5q2.5-2.2 5 0t5 0' />
    </>
  ),
  hurt: (
    <>
      <Line d='M27 41h8M45 41h8' w={1.8} />
      <Dot x={31} y={49} />
      <Dot x={49} y={49} />
      <Line d='M36.5 59q3.5-2.6 7 0' />
      <Cheeks o={0.3} />
    </>
  ),
  // 분노
  angry: (
    <>
      <Line d='M26 39l9 4M54 39l-9 4' w={2.2} />
      <Dot x={31} y={48} />
      <Dot x={49} y={48} />
      <Line d='M35 60q5-4.5 10 0' />
      <path
        d='M62 13q2.6 3.4 0 6.8M69 13q-2.6 3.4 0 6.8M60.5 21q3.4-2.6 6.8 0M60.5 11.5q3.4 2.6 6.8 0'
        className='stroke-anger-500'
        strokeWidth={2.2}
        strokeLinecap='round'
        fill='none'
      />
    </>
  ),
  annoyed: (
    <>
      <Line d='M26 40l9 2.5M54 40l-9 2.5' />
      <Squeeze />
      <Line d='M34.5 58.5l2.75-2.2 2.75 2.2 2.75-2.2 2.75 2.2' w={2} />
    </>
  ),
  unfair: (
    <>
      <Squeeze />
      <Drop x={22} y={50} />
      <Drop x={58} y={50} />
      <Mouth d='M33 57q3.5-3.4 7 0t7 0v2.5q-7 4.5-14 0Z' />
    </>
  ),
  // 두려움
  scared: (
    <>
      <Line d='M27 40l8-3M45 37l8 3' w={1.8} />
      <Ring x={31} y={47} />
      <Ring x={49} y={47} />
      <Mouth d='M34 60q3-3.6 6 0t6 0v.5q-6-2.6-12 0Z' />
      <Drop x={66} y={26} />
      <path
        d='M28 33v3M34 32v4M46 32v4M52 33v3'
        className='stroke-fear-500'
        strokeWidth={1.6}
        strokeLinecap='round'
      />
    </>
  ),
  worried: (
    <>
      <Line d='M27 41l8-3M45 38l8 3' w={1.8} />
      <Shine x={31} y={48} r={3} />
      <Shine x={49} y={48} r={3} />
      <ellipse
        cx={41.5}
        cy={59}
        rx={2.6}
        ry={3.2}
        fill={MOUTH}
        stroke={MOUTH_LINE}
        strokeWidth={1.2}
      />
      <Drop x={66} y={26} />
    </>
  ),
  nervous: (
    <>
      <Line d='M27 40l8 1.6M53 40l-8 1.6M27.5 47h7M45.5 47h7' />
      <rect
        x={34}
        y={55}
        width={12}
        height={6}
        rx={2.4}
        fill={WHITE}
        className='stroke-ink'
        strokeWidth={1.8}
      />
      <path d='M38 55v6M42 55v6' className='stroke-ink' strokeWidth={1.2} />
      <path
        d='M19 47v5M22 46.5v6M25 47v5'
        className='stroke-ink'
        strokeWidth={1.4}
        strokeLinecap='round'
        opacity={0.5}
      />
      <Drop x={66} y={26} />
    </>
  ),
  // 부끄러움
  shy: (
    <>
      <Line d='M27 46q4 4 8 0M45 46q4 4 8 0' />
      <Line d='M37 57q3 2.6 6 0' />
      <Cheeks o={0.95} rx={7} ry={4.4} />
      <Hatch />
    </>
  ),
  bashful: (
    <>
      <Brows />
      <Shine x={35} y={47} r={3} />
      <Shine x={53} y={47} r={3} />
      <Line d='M35.5 57.5q2.25 2.2 4.5 0t4.5 0' />
      <Cheeks o={0.85} rx={6} ry={3.6} />
      <Line d='M2 32l4 1.8M1.5 38.5h4' w={2} />
    </>
  ),
  embarrassed: (
    <>
      <Squeeze />
      <Line d='M35 58.5q2.5-2.2 5 0t5 0' />
      <Cheeks o={1} rx={7} ry={4.4} />
      <Hatch />
      <Drop x={67} y={24} />
    </>
  ),
  // 놀라움
  surprised: (
    <>
      <Line d='M27 38q4-3.2 8 0M45 38q4-3.2 8 0' w={1.8} />
      <Ring x={31} y={46} />
      <Ring x={49} y={46} />
      <ellipse
        cx={40}
        cy={59}
        rx={3.6}
        ry={4.8}
        fill={MOUTH}
        stroke={MOUTH_LINE}
        strokeWidth={1.4}
      />
      <path d='M69 7v8' className='stroke-surprise-500' strokeWidth={3} strokeLinecap='round' />
      <circle cx={69} cy={20} r={1.8} className='fill-surprise-500' />
    </>
  ),
  amazed: (
    <>
      <Brows />
      <circle cx={31} cy={47} r={4} className='fill-ink' />
      <circle cx={49} cy={47} r={4} className='fill-ink' />
      <circle cx={32.4} cy={45.4} r={1.6} fill={WHITE} />
      <circle cx={50.4} cy={45.4} r={1.6} fill={WHITE} />
      <circle cx={29.6} cy={48.6} r={0.8} fill={WHITE} />
      <circle cx={47.6} cy={48.6} r={0.8} fill={WHITE} />
      <Mouth d='M35.5 55Q40 61.5 44.5 55Z' />
      <Cheeks o={0.5} />
      <Sparkle x={70} y={12} s={1.1} />
      <Sparkle x={10} y={20} s={0.8} />
    </>
  ),
  curious: (
    <>
      <Line d='M27 41h8M45 39q4-3.6 8 0' w={1.8} />
      <Shine x={33} y={47} />
      <Shine x={51} y={47} />
      <Line d='M36.5 58.5q4 0 7.5-2.5' />
      <Line d='M64 10q0-4.4 4.4-4.4t4.4 4.4q0 2.8-3.6 4v2.6' />
      <circle cx={69.2} cy={21} r={1.6} className='fill-ink' />
    </>
  ),
}

interface EmotionFaceProps {
  face: FaceKey
  className?: string
  style?: CSSProperties
}

/** 감정 사전 아이 얼굴 (Figma "Face / *") */
const EmotionFace = ({ face, className, style }: EmotionFaceProps) => (
  <svg
    viewBox='0 0 80 80'
    fill='none'
    aria-hidden
    className={cn('shrink-0 overflow-visible', className)}
    style={style}
  >
    <Head />
    {FACES[face]}
  </svg>
)

export default EmotionFace
