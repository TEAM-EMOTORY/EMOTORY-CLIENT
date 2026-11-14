import type { EmotionKey } from '@shared/components/emotion-icon/emotion-icon'
import type { StoryEmotion } from '../apis/shared-stories'

// 서버 감정 10가지 → 디자인 시스템 감정 색 6가지
export const EMOTION_THEME: Record<
  StoryEmotion,
  { key: EmotionKey; label: string; spine: string; badge: string }
> = {
  HAPPY: {
    key: 'joy',
    label: '기쁨',
    spine: 'bg-yellow-500',
    badge: 'border-yellow-500 text-yellow-500',
  },
  EXCITED: {
    key: 'joy',
    label: '신남',
    spine: 'bg-yellow-500',
    badge: 'border-yellow-500 text-yellow-500',
  },
  SAD: {
    key: 'sadness',
    label: '슬픔',
    spine: 'bg-sadness-500',
    badge: 'border-sadness-500 text-sadness-500',
  },
  LONELY: {
    key: 'sadness',
    label: '외로움',
    spine: 'bg-sadness-500',
    badge: 'border-sadness-500 text-sadness-500',
  },
  ANGRY: {
    key: 'anger',
    label: '분노',
    spine: 'bg-anger-500',
    badge: 'border-anger-500 text-anger-500',
  },
  FEAR: {
    key: 'fear',
    label: '두려움',
    spine: 'bg-fear-500',
    badge: 'border-fear-500 text-fear-500',
  },
  ANXIOUS: {
    key: 'fear',
    label: '불안',
    spine: 'bg-fear-500',
    badge: 'border-fear-500 text-fear-500',
  },
  EMBARRASSED: {
    key: 'disgust',
    label: '부끄러움',
    spine: 'bg-disgust-500',
    badge: 'border-disgust-500 text-disgust-500',
  },
  SURPRISED: {
    key: 'surprise',
    label: '놀라움',
    spine: 'bg-surprise-500',
    badge: 'border-surprise-500 text-surprise-500',
  },
  CALM: {
    key: 'surprise',
    label: '평온',
    spine: 'bg-surprise-500',
    badge: 'border-surprise-500 text-surprise-500',
  },
}
