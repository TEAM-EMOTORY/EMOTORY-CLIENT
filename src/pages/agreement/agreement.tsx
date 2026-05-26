import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as styles from './agreement.css'
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
      <main className={styles.container}>
        <section className={styles.whiteBox}>
          <h1 className={styles.title}>보호자 동의가 필요해요</h1>

          <article className={styles.infoSection}>
            <p className={styles.infoText}>아이의 이름과 사진이 이야기 속에서 활용됩니다.</p>
            <p className={styles.infoText}>
              수집된 정보는 서비스 내에서만 사용되며 저장되지 않습니다.
            </p>
            <p className={styles.infoText}>보호자께서 먼저 내용을 확인하고 동의해 주세요.</p>
          </article>

          <div className={styles.checkboxWrapper}>
            <input
              type='checkbox'
              id='consent-checkbox'
              checked={isConsented}
              onChange={handleConsentChange}
              className={styles.checkboxInput}
            />
            <label htmlFor='consent-checkbox' className={styles.checkboxLabel}>
              위 내용을 확인했으며 동의합니다
            </label>
          </div>

          <div className={styles.buttonGroup}>
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
