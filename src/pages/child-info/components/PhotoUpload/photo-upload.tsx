
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
    <label className='relative flex h-350 w-300 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-surface-card'>
      <input type='file' accept='image/*' className='hidden' onChange={handleChange} />
      {previewUrl ? (
        <img src={previewUrl} alt='아이 사진' className='absolute inset-0 size-full object-cover' />
      ) : (
        <div className='flex h-[calc(100%-2rem)] w-[calc(100%-2rem)] flex-col items-center justify-center rounded-md border-[2.5px] border-dashed border-border-strong bg-surface-inset'>
          <p className='text-subtitle text-ink'>사진 추가하기</p>
          <p className='text-center text-caption text-ink-3'>아이의 사진을 넣어주세요</p>
        </div>
      )}
    </label>
  )
}

export default PhotoUpload
