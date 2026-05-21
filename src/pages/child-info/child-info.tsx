import { useState } from 'react'
import Button from '@shared/components/button/button'
import Input from '@shared/components/input/input'
import * as styles from './child-info.css'
import PhotoUpload from './components/PhotoUpload/photo-upload'

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
    <div className={styles.page}>
      <div className={styles.title}>
        <p className={styles.titleRow}>
          <span className={styles.titleStar}>★</span>
          우리
          <span className={styles.pointText}> 아이</span>를 소개해 주세요
          <span className={styles.titleStar}>★</span>
        </p>
        <p className={styles.subtitle}>아이에게 더 맞는 이야기와 경험을 제공해드려요.</p>
      </div>

      <div className={styles.container}>
        <PhotoUpload onFileSelect={handlePhotoSelect} previewUrl={photoUrl} />

        <div className={styles.formSection}>
          <p className={styles.nameLabel}>아이 이름</p>
          <Input placeholder='이름을 입력해 주세요' value={name} onChange={setName} />
          <p className={styles.notice}>
            <span className={styles.titleStar}>★</span>
            이름은 언제든지 변경할 수 있어요.
          </p>
          <Button children='다음으로 >' color='yellow' onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default ChildInfoPage
