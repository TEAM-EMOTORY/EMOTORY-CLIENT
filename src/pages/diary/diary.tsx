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
  '유치원(어린이집)에 갈 준비를 할 때 기분이 어땠어?',
  '선생님과 친구들 만났을 때 기분은 어땠어?',
  '오전 간식시간에 기분이 어땠어?',
  '친구와 놀이할 때 기분은 어땠어?',
  '바깥놀이 또는 신체활동 시간에 기분이 어땠어?',
  '점심메뉴를 봤을 때 기분이 어땠어?',
  '점심을 먹었을 때 기분이 어땠어?',
  '특별활동 시간에 기분이 어땠어?',
  '선생님과 이야기할 때 기분이 어땠어?',
  '하원 준비를 할 때 기분이 어땠어?',
  '유치원에서 하원했을 때 기분이 어땠어?',
  '가족을 만났을 때 기분이 어땠어?',
  '집에 오는 길에 기분이 어땠어?',
  '저녁을 먹을 때 기분이 어땠어?',
  '가족과 놀이하거나 이야기를 나눌 때 기분이 어땠어?',
  '씻고 잘 준비를 할 때 기분이 어땠어?',
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
      content={<StepFlowContent content={currentQuestion} showStar={false} />}
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
