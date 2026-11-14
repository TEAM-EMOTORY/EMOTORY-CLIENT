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
    <>
      <main className='flex h-dvh w-screen flex-col items-center justify-center'>
        <section className='flex h-490 w-620 flex-col items-center justify-center gap-35 rounded-lg bg-surface-card shadow-card'>
          <h1 className='text-center text-title text-ink'>보호자 동의가 필요해요</h1>

          <article className='flex min-h-155 w-520 flex-col items-start justify-center gap-4 rounded-md border border-dashed border-border-strong bg-surface-inset px-30 py-25'>
            <p className='break-keep text-left text-body text-ink-2'>아이의 이름과 사진이 이야기 속에서 활용됩니다.</p>
            <p className='break-keep text-left text-body text-ink-2'>
              수집된 정보는 서비스 내에서만 사용되며 저장되지 않습니다.
            </p>
            <p className='break-keep text-left text-body text-ink-2'>보호자께서 먼저 내용을 확인하고 동의해 주세요.</p>
          </article>

          <div className='flex cursor-pointer items-center gap-10'>
            <input
              type='checkbox'
              id='consent-checkbox'
              checked={isConsented}
              onChange={handleConsentChange}
              className='size-30 cursor-pointer accent-yellow-500'
            />
            <label htmlFor='consent-checkbox' className='cursor-pointer text-body text-ink-2'>
              위 내용을 확인했으며 동의합니다
            </label>
          </div>

          <div className='flex gap-15'>
            <Button color='cream' onClick={handleRejectClick}>
              다음에 할래요
            </Button>

            <Button color='yellow' onClick={handleSubmitClick} disabled={!isConsented}>
              동의하고 시작
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default AgreementPage
