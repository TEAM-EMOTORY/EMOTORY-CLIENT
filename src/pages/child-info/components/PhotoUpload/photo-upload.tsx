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
    <label className='relative flex h-306 w-265 cursor-pointer flex-col items-center justify-center gap-24 overflow-hidden rounded-lg border-2 border-dashed border-border-strong bg-surface-card shadow-card'>
      <input type='file' accept='image/*' className='hidden' onChange={handleChange} />
      {previewUrl ? (
        <img src={previewUrl} alt='아이 사진' className='absolute inset-0 size-full object-cover' />
      ) : (
        <>
          <span className='flex size-96 items-center justify-center rounded-md bg-surface-inset text-ink-3'>
            <AddPhotoIcon className='size-44' />
          </span>
          <span className='flex flex-col items-center gap-12'>
            <span className='text-subtitle text-ink'>사진 추가하기</span>
            <span className='text-caption text-ink-3'>아이의 사진을 넣어주세요</span>
          </span>
        </>
      )}
    </label>
  )
}

const AddPhotoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.6'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M13 6H9.2L7.8 7.8H5.5A1.5 1.5 0 0 0 4 9.3v8.2A1.5 1.5 0 0 0 5.5 19h11a1.5 1.5 0 0 0 1.5-1.5V12' />
    <circle cx='11' cy='13.2' r='3' />
    <path d='M18 3.5v5M15.5 6h5' />
  </svg>
)

export default PhotoUpload
