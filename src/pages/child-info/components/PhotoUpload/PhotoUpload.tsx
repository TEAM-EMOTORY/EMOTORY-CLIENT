import { useRef } from 'react'
import * as styles from './PhotoUpload.css'

interface PhotoUploadProps {
  onFileSelect?: (file: File) => void
  previewUrl?: string
}

const PhotoUpload = ({ onFileSelect, previewUrl }: PhotoUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && onFileSelect) {
      onFileSelect(file)
    }
  }

  return (
    <button type='button' className={styles.uploadBox} onClick={handleClick}>
      <div className={styles.iconWrapper}>
        {previewUrl ? (
          <img src={previewUrl} alt='아이 사진' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span className={styles.iconPlaceholder}>🖼️</span>
        )}
      </div>
      <p className={styles.uploadTitle}>사진 추가하기</p>
      <p className={styles.uploadDesc}>아이의 사진을 넣어주세요</p>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </button>
  )
}

export default PhotoUpload