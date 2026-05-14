import { useState } from 'react'
import Button from '@shared/components/Button/Button'
import Input from '@shared/components/Input/Input'
import * as styles from './child-info.css'
import PhotoUpload from './components/PhotoUpload/PhotoUpload'

const ChildInfoPage = () => {
  const [name, setName] = useState('')
  const [photoUrl, setPhotoUrl] = useState<string>()

  const handlePhotoSelect = (file: File) => {
    setPhotoUrl(URL.createObjectURL(file))
  }

  const handleNext = () => {
    // TODO: 다음 페이지 이동
  }

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            <span className={styles.titleStar}>✦</span>
            우리<span className={styles.pointText}>아이</span>를 소개해 주세요
            <span className={styles.titleStar}>✦</span>
          </h2>
          <p className={styles.subtitle}>아이에게 더 맞는 이야기와 경험을 제공해드려요.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.photoSection}>
            <PhotoUpload onFileSelect={handlePhotoSelect} previewUrl={photoUrl} />
          </div>

          <div className={styles.formSection}>
            <Input
              label='아이 이름'
              placeholder='이름을 입력해 주세요'
              value={name}
              onChange={setName}
              helperText='이름은 언제든지 변경할 수 있어요.'
            />
            <Button fullWidth onClick={handleNext}>
              다음으로 &gt;
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ChildInfoPage
