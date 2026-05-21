import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styles from './emotion-select.css'
import Button from '@shared/components/button/button'

interface EmotionData {
  id: string
  label: string
  color: string
}

const EmotionSelectPage = () => {
  const navigate = useNavigate()
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
  const [childName, setChildName] = useState<string>('@@')

  useEffect(() => {
    const storedName = localStorage.getItem('childName')
    if (storedName) {
      setChildName(storedName)
    }
  }, [])

  const emotions: EmotionData[] = [
    { id: 'happy', label: '기쁨', color: '#FCDFC9' },
    { id: 'sad', label: '슬픔', color: '#FFA4A4' },
    { id: 'angry', label: '분노', color: '#FCDFC9' },
  ]

  const handleCardClick = (id: string) => {
    setSelectedEmotion(id)
  }

  const handleNextClick = () => {
    if (!selectedEmotion) return
    navigate('/story-generation')
  }

  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.bgContainer}>
          <div className={styles.titleGroup}>
            <h1 className={styles.mainTitle}>
              {childName}아<br />
              오늘은 어떤 <span className={styles.pointWord}>감정</span>을 탐험해볼까?
            </h1>
            <p className={styles.subTitle}>탐험하고 싶은 감정을 선택해보자!</p>
          </div>

          <section className={styles.cardSection}>
            {emotions.map((emotion) => (
              <button
                key={emotion.id}
                type='button'
                className={styles.emotionCard}
                onClick={() => handleCardClick(emotion.id)}
                style={{
                  backgroundColor: emotion.color,
                  outline: selectedEmotion === emotion.id ? '0.4rem solid #1C599D' : 'none',
                  outlineOffset: '0.4rem',
                }}
              >
                <span className={styles.labelText}>{emotion.label}</span>
              </button>
            ))}
          </section>

          <div className={styles.submitButtonWrapper}>
            <Button color='yellow' onClick={handleNextClick} disabled={!selectedEmotion}>
              이야기 시작하기
            </Button>
          </div>
        </main>
      </div>
    </>
  )
}

export default EmotionSelectPage
