import logoImg from '@shared/assets/logo.webp'

interface HeaderProps {
  emotionLabel?: string
}

const Header = ({ emotionLabel }: HeaderProps) => {
  return (
    <header className='flex items-center gap-20 pb-24'>
      <img src={logoImg} alt='emotory logo' className='h-56 w-auto object-contain' />
      {emotionLabel && (
        <div className='flex items-center gap-6 rounded-pill border border-border bg-surface-card px-16 py-7 text-label text-ink shadow-sm'>
          <span>🐥</span>
          <span>{emotionLabel}</span>
          <span className='text-[3.4rem]'>›</span>
        </div>
      )}
    </header>
  )
}

export default Header
