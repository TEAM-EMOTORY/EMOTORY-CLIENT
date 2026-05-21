import * as styles from './emotion-select.css'

const emotions = [
  { id: 'sad', label: '슬픔', className: styles.emotionCardSad },
  { id: 'happy', label: '기쁨', className: styles.emotionCardJoy },
  { id: 'angry', label: '분노', className: styles.emotionCardAngry },
]

const EmotionSelectPage = () => {
  const childName = localStorage.getItem('childName') ?? '하이'

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleGroup}>
        <h1 className={styles.mainTitle}>
          {childName}야,
          <br />
          오늘은 어떤 <span className={styles.pointWord}>감정</span>을 탐험해볼까?
        </h1>
        <p className={styles.subTitle}>탐험하고 싶은 감정을 선택해보자!</p>
      </div>

      <section className={styles.cardSection}>
        {emotions.map((emotion) => (
          <button key={emotion.id} type='button' className={emotion.className}>
            <span className={styles.labelText}>{emotion.label}</span>
          </button>
        ))}
      </section>
    </div>
  )
}

export default EmotionSelectPage
