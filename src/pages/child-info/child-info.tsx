import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '@shared/components/button/button'
import Input from '@shared/components/input/input'
import * as styles from './child-info.css'
import PhotoUpload from './components/PhotoUpload/photo-upload'
import { useUploadPhoto } from './hooks/use-upload-photo'
import { useCreateMember } from './hooks/use-create-member'

const CHILD_PROFILE_IMAGE_KEY = 'childProfileImage'

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') resolve(reader.result)
      else reject(new Error('Failed to read image file.'))
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })

const ChildInfoPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [name, setName] = useState('')
  const [photoUrl, setPhotoUrl] = useState<string>()
  const [uploadResult, setUploadResult] = useState<{
    fileKey: string
    faceImageUrl: string
  } | null>(null)
  const redirectPath = searchParams.get('redirect')
  const nextPath = redirectPath === '/diary' ? '/diary' : '/emotion-select'

  const { mutate: uploadPhoto, isPending: isUploading } = useUploadPhoto()
  const { mutate: createMember, isPending: isCreating } = useCreateMember()

  const handlePhotoSelect = (file: File) => {
    setPhotoUrl(URL.createObjectURL(file))
    setUploadResult(null)
    const profileImagePromise = readFileAsDataUrl(file).catch(() => undefined)

    uploadPhoto(file, {
      onSuccess: async (result) => {
        const dataUrl = await profileImagePromise
        if (dataUrl) {
          localStorage.setItem(CHILD_PROFILE_IMAGE_KEY, dataUrl)
        }
        setUploadResult(result)
      },
    })
  }

  const handleNext = () => {
    if (!uploadResult) return
    const { faceImageUrl, fileKey } = uploadResult
    createMember(
      { name, faceImageUrl, isPrivacyAgreed: true },
      {
        onSuccess: () => {
          localStorage.setItem('childName', name)
          localStorage.setItem('faceImageKey', fileKey)
          navigate(nextPath)
        },
      },
    )
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
          <Button
            children='다음으로 >'
            color='yellow'
            onClick={handleNext}
            disabled={isUploading || isCreating || !name.trim() || !uploadResult}
          />
        </div>
      </div>
    </div>
  )
}

export default ChildInfoPage
