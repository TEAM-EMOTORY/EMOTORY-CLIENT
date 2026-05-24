import { useNavigate } from 'react-router-dom'
import * as styles from './emotion-select.css'
import { useCreatePlaySession } from './hooks/use-create-play-session'
import { encodeNodeId } from '@shared/utils/encode-node-id'

import { useMember } from '@shared/hooks/use-member'

const emotions = [
  { label: '슬픔', className: styles.emotionCardSad, storyId: 1 },
  { label: '기쁨', className: styles.emotionCardJoy, storyId: 2 },
  { label: '분노', className: styles.emotionCardAngry, storyId: 3 },
]

const EmotionSelectPage = () => {
  const navigate = useNavigate()

  const memberId = localStorage.getItem('memberId')

  const { data } = useMember(memberId)
  const childName = data?.name ?? '하이'

  const { mutate: createPlaySession, isPending } = useCreatePlaySession()

  const handleEmotionSelect = (storyId: number) => {
    const currentMemberId = memberId ? Number(memberId) : 1

    createPlaySession(
      { memberId: currentMemberId, storyId },
      {
        onSuccess: ({ playSessionId, currentNodeId }) => {
          navigate(`/story/${encodeNodeId(currentNodeId)}`, { state: { playSessionId } })
        },
      },
    )
  }

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
        {emotions.map(({ className, storyId, label }) => (
          <button
            key={storyId}
            type='button'
            className={className}
            onClick={() => handleEmotionSelect(storyId)}
            disabled={isPending}
          >
            <span className={styles.labelText}>{label}</span>
          </button>
        ))}
      </section>
    </div>
  )
}

export default EmotionSelectPage
