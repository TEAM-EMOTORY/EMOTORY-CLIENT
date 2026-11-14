
interface NavProps {
  currentStep: number
  totalSteps?: number
  onHome: () => void
  onPrev: () => void
}

const Nav = ({ currentStep, totalSteps = 3, onHome, onPrev }: NavProps) => {
  const progress = Math.min((currentStep / totalSteps) * 100, 100)

  return (
    <nav className='flex items-center justify-between px-24'>
      <button type='button' className='flex min-h-62 items-center gap-8 rounded-pill border-[1.5px] border-border bg-surface-card px-30 text-subtitle text-ink-2 shadow-sm' onClick={onHome}>
        🏠 처음으로
      </button>
      <div className='mx-16 h-10 flex-1 overflow-hidden rounded-pill bg-surface-inset'>
        <div className='h-full rounded-pill bg-yellow-500 transition-[width] duration-400 ease-in-out' style={{ width: `${progress}%` }} />
      </div>
      <button type='button' className='flex min-h-62 items-center gap-8 rounded-pill border-[1.5px] border-border bg-surface-card px-30 text-subtitle text-ink-2 shadow-sm' onClick={onPrev}>
        ← 이전으로
      </button>
    </nav>
  )
}

export default Nav
