import angryCharacterImg from '@shared/assets/emotion-img/angry_character.webp'
import angryIconImg from '@shared/assets/emotion-img/angry_icon.webp'
import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'
import happyIconImg from '@shared/assets/emotion-img/happy_icon.webp'
import sadCharacterImg from '@shared/assets/emotion-img/sad_character.webp'
import sadIconImg from '@shared/assets/emotion-img/sad_icon.webp'
import { joyBar, sadBar, angryBar } from './graph-card.css'

export type DiaryEmotion = 'joy' | 'sad' | 'angry'

export type EmotionDescription = { title: string; description: string }

export type EmotionResult = {
  id: DiaryEmotion
  label: string
  iconImg: string
  characterImg: string
  barClassName: string
  emotionDescription: EmotionDescription
}

export const EMOTION_RESULTS: EmotionResult[] = [
  {
    id: 'joy',
    label: '기쁨',
    iconImg: happyIconImg,
    characterImg: happyCharacterImg,
    barClassName: joyBar,
    emotionDescription: { title: '오늘은 기쁜 하루였어요!', description: '즐거웠던 일을 하나 떠올려볼까요?' },
  },
  {
    id: 'sad',
    label: '슬픔',
    iconImg: sadIconImg,
    characterImg: sadCharacterImg,
    barClassName: sadBar,
    emotionDescription: { title: '오늘은 속상한 하루였어요.', description: '속상했던 일을 천천히 떠올려볼까요?' },
  },
  {
    id: 'angry',
    label: '화남',
    iconImg: angryIconImg,
    characterImg: angryCharacterImg,
    barClassName: angryBar,
    emotionDescription: { title: '오늘은 마음이 불편한 하루였어요.', description: '불편했던 일을 천천히 떠올려볼까요?' },
  },
]
