import * as styles from './photo-upload.css'

interface PhotoUploadProps {
  onFileSelect?: (file: File) => void
  previewUrl?: string
}

const PhotoUpload = ({ onFileSelect, previewUrl }: PhotoUploadProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onFileSelect?.(file)
  }

  return (
    <label className={styles.uploadBox}>
      <input type='file' accept='image/*' style={{ display: 'none' }} onChange={handleChange} />
      {previewUrl ? (
        <img src={previewUrl} alt='아이 사진' className={styles.previewImage} />
      ) : (
        <div className={styles.inner}>
          <p className={styles.uploadTitle}>사진 추가하기</p>
          <p className={styles.uploadDesc}>아이의 사진을 넣어주세요</p>
        </div>
      )}
    </label>
  )
}

export default PhotoUpload
