import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../../shared/components/button/button'

const AgreementPage = () => {
  const [isConsented, setIsConsented] = useState<boolean>(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const next = searchParams.get('next')
  const childInfoPath = next === 'diary' ? '/child-info?redirect=/diary' : '/child-info'

  const handleConsentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsConsented(e.target.checked)
  }

  const handleRejectClick = () => {
    navigate('/')
  }

  const handleSubmitClick = () => {
    if (!isConsented) return
    navigate(childInfoPath)
  }

  return (
    <main className='flex h-dvh w-screen flex-col items-center justify-center'>
      <section className='flex w-614 flex-col items-center gap-32 rounded-lg border border-border bg-surface-card px-64 pt-56 pb-48 shadow-card'>
        <h1 className='flex items-center gap-12 text-heading text-ink'>
          <HeartIcon className='size-16 text-yellow-500' />
          <ShieldIcon className='size-36 text-yellow-500' />
          보호자 동의가 필요해요
          <HeartIcon className='size-16 text-yellow-500' />
        </h1>

        <article className='relative flex w-full flex-col gap-12 rounded-md border-[1.5px] border-border bg-surface-inset px-32 py-28'>
          <div
            aria-hidden
            className='pointer-events-none absolute inset-6 rounded-sm border border-dashed border-border-strong'
          />
          <p className='break-keep text-caption text-ink-2'>
            아이의 이름과 사진이 이야기 속에서 활용됩니다.
          </p>
          <p className='break-keep text-caption text-ink-2'>
            수집된 정보는 서비스 내에서만 사용되며 저장되지 않습니다.
          </p>
          <p className='break-keep text-caption text-ink-2'>
            보호자께서 먼저 내용을 확인하고 동의해 주세요.
          </p>
        </article>

        <label
          htmlFor='consent-checkbox'
          className='flex w-full cursor-pointer items-center gap-12'
        >
          <input
            type='checkbox'
            id='consent-checkbox'
            checked={isConsented}
            onChange={handleConsentChange}
            className='peer sr-only'
          />
          <span
            aria-hidden
            className='flex size-28 items-center justify-center rounded-[0.8rem] border-[1.5px] border-border-strong bg-surface-card text-on-primary peer-checked:border-yellow-700 peer-checked:bg-yellow-500 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-yellow-700 [&>svg]:invisible peer-checked:[&>svg]:visible'
          >
            <CheckIcon className='size-18' />
          </span>
          <span className='text-caption text-ink-2'>위 내용을 확인했으며 동의합니다</span>
        </label>

        <div className='flex w-full gap-20'>
          <Button color='soft' size='md' onClick={handleRejectClick}>
            거부
          </Button>
          <Button color='yellow' size='md' onClick={handleSubmitClick} disabled={!isConsented}>
            동의하고 가기
          </Button>
        </div>
      </section>
    </main>
  )
}

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M12 20.5 10.8 19.4C6.1 15.2 3 12.4 3 8.9 3 6.1 5.2 4 7.9 4c1.6 0 3.1.7 4.1 1.9C13 4.7 14.5 4 16.1 4 18.8 4 21 6.1 21 8.9c0 3.5-3.1 6.3-7.8 10.5L12 20.5Z' />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M12 3 5 5.8v5.4c0 4.4 3 8.4 7 9.8 4-1.4 7-5.4 7-9.8V5.8L12 3Z' />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='3'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='m5 12.5 4.5 4.5L19 7.5' />
  </svg>
)

export default AgreementPage
