import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChoiceSection,
  StepFlowContent,
  StepFlowFrame,
  StepFlowHeader,
  StepFlowNav,
} from '@shared/components/step-flow'
import DiarySunScene from './components/diary-sun-scene/diary-sun-scene'
import { hasConsonantEnding } from '@shared/utils/korean-particle'
import happyCharacterImg from '@shared/assets/emotion-img/happy_character.webp'
import sadCharacterImg from '@shared/assets/emotion-img/sad_character.webp'
import angryCharacterImg from '@shared/assets/emotion-img/angry_character.webp'

type DiaryEmotion = 'joy' | 'sad' | 'angry'

const DIARY_CHOICES = [
  { id: 'joy', text: '기쁨', imageSrc: happyCharacterImg },
  { id: 'sad', text: '슬픔', imageSrc: sadCharacterImg },
  { id: 'angry', text: '화남', imageSrc: angryCharacterImg },
]

const DIARY_QUESTION_SUFFIXES = [
  '자고 일어났을 때 기분이 어땠어?',
  '친구와 놀이할 때 기분은 어땠어?',
  '점심을 먹었을 때 기분이 어땠어?',
  '가족을 만났을 때 기분이 어땠어?',
  '잠들기 전 기분이 어땠어?',
]

const DiaryPage = () => {
  const navigate = useNavigate()
  const childName = localStorage.getItem('childName') ?? ''
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<DiaryEmotion[]>([])

  const nameParticle = hasConsonantEnding(childName) ? `${childName}이는` : `${childName}는`
  const currentQuestion = `${nameParticle} ${DIARY_QUESTION_SUFFIXES[currentQuestionIndex]}`

  const handleChoiceSelect = (emotion: string) => {
    const nextAnswers = [...answers]
    nextAnswers[currentQuestionIndex] = emotion as DiaryEmotion

    if (currentQuestionIndex === DIARY_QUESTION_SUFFIXES.length - 1) {
      navigate('/diary-result', { state: { answers: nextAnswers } })
      return
    }

    setAnswers(nextAnswers)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handlePrev = () => {
    if (currentQuestionIndex === 0) {
      navigate(-1)
      return
    }

    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  return (
    <StepFlowFrame
      header={<StepFlowHeader />}
      scene={
        <DiarySunScene
          currentStep={currentQuestionIndex + 1}
          totalSteps={DIARY_QUESTION_SUFFIXES.length}
        />
      }
      content={<StepFlowContent content={currentQuestion} showStar={false} autoSpeak />}
      choices={
        <ChoiceSection
          choices={DIARY_CHOICES}
          label='기분이 어땠어?'
          onChoiceSelect={handleChoiceSelect}
        />
      }
      nav={
        <StepFlowNav
          currentStep={currentQuestionIndex + 1}
          totalSteps={DIARY_QUESTION_SUFFIXES.length}
          onHome={() => navigate('/')}
          onPrev={handlePrev}
        />
      }
    />
  )
}

export default DiaryPage
