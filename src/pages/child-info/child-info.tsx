import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '@shared/components/button/button'
import Input from '@shared/components/input/input'
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
    <div className='flex h-full flex-col items-center justify-center gap-80 text-ink'>
      <div className='flex flex-col items-center text-display text-glow'>
        <p className='flex items-center'>
          <span className='p-10 text-heading text-yellow-500'>★</span>
          우리
          <span className='text-accent'> 아이</span>를 소개해 주세요
          <span className='p-10 text-heading text-yellow-500'>★</span>
        </p>
        <p className='text-body text-ink-2'>아이에게 더 맞는 이야기와 경험을 제공해드려요.</p>
      </div>

      <div className='flex items-center gap-32'>
        <PhotoUpload onFileSelect={handlePhotoSelect} previewUrl={photoUrl} />

        <div className='flex w-331 flex-col gap-48'>
          <div className='flex flex-col gap-12'>
            <label htmlFor='child-name' className='text-label text-ink'>
              아이 이름
            </label>
            <Input
              id='child-name'
              placeholder='이름을 입력해 주세요'
              value={name}
              onChange={setName}
            />
            <p className='flex items-center gap-8 text-caption text-ink-3'>
              <StarIcon className='size-16 text-yellow-500' />
              이름은 언제든지 변경할 수 있어요.
            </p>
          </div>

          <div className='w-273'>
            <Button
              color='yellow'
              size='md'
              onClick={handleNext}
              disabled={isUploading || isCreating || !name.trim() || !uploadResult}
            >
              다음으로
              <ChevronRightIcon className='ml-8 size-24' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M12 3.2 14.6 8.6l5.9.8-4.3 4.1 1 5.9L12 16.6l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.2Z' />
  </svg>
)

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.4'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='m9.5 6 6 6-6 6' />
  </svg>
)

export default ChildInfoPage
