import type { EmotionKey } from '@shared/components/emotion-icon/emotion-icon'

export type FaceKey =
  | 'glad'
  | 'excited'
  | 'happy'
  | 'sad'
  | 'upset'
  | 'hurt'
  | 'angry'
  | 'annoyed'
  | 'unfair'
  | 'scared'
  | 'worried'
  | 'nervous'
  | 'shy'
  | 'bashful'
  | 'embarrassed'
  | 'surprised'
  | 'amazed'
  | 'curious'

export interface EmotionWord {
  face: FaceKey
  label: string
}

export interface EmotionFamily {
  emotion: EmotionKey
  words: EmotionWord[]
}

/** 감정 사전 (Figma 09) — 감정 계열 하나가 한 줄(세로)을 이룬다 */
export const EMOTION_FAMILIES: EmotionFamily[] = [
  {
    emotion: 'joy',
    words: [
      { face: 'glad', label: '기뻐요' },
      { face: 'excited', label: '신나요' },
      { face: 'happy', label: '행복해요' },
    ],
  },
  {
    emotion: 'sadness',
    words: [
      { face: 'sad', label: '슬퍼요' },
      { face: 'upset', label: '속상해요' },
      { face: 'hurt', label: '서운해요' },
    ],
  },
  {
    emotion: 'anger',
    words: [
      { face: 'angry', label: '화나요' },
      { face: 'annoyed', label: '짜증나요' },
      { face: 'unfair', label: '억울해요' },
    ],
  },
  {
    emotion: 'fear',
    words: [
      { face: 'scared', label: '무서워요' },
      { face: 'worried', label: '걱정돼요' },
      { face: 'nervous', label: '긴장돼요' },
    ],
  },
  {
    emotion: 'disgust',
    words: [
      { face: 'shy', label: '부끄러워요' },
      { face: 'bashful', label: '쑥스러워요' },
      { face: 'embarrassed', label: '창피해요' },
    ],
  },
  {
    emotion: 'surprise',
    words: [
      { face: 'surprised', label: '놀랐어요' },
      { face: 'amazed', label: '신기해요' },
      { face: 'curious', label: '궁금해요' },
    ],
  },
]

/** 감정 계열 → 깃발 · 압정 색 (-500) */
export const EMOTION_FILL: Record<EmotionKey, string> = {
  joy: 'fill-yellow-500',
  sadness: 'fill-sadness-500',
  anger: 'fill-anger-500',
  fear: 'fill-fear-500',
  disgust: 'fill-disgust-500',
  surprise: 'fill-surprise-500',
}

export const EMOTION_BG: Record<EmotionKey, string> = {
  joy: 'bg-yellow-500',
  sadness: 'bg-sadness-500',
  anger: 'bg-anger-500',
  fear: 'bg-fear-500',
  disgust: 'bg-disgust-500',
  surprise: 'bg-surprise-500',
}
