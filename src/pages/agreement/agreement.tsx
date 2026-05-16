import { useState } from 'react'
import type { ChangeEvent } from 'react'
import * as styles from './agreement.css'
import Button from '../../shared/components/button/button'

const AgreementPage = () => {
  const [isConsented, setIsConsented] = useState<boolean>(false)

  const handleConsentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsConsented(e.target.checked)
  }

  // 거부 버튼을 클릭했을 때
  const handleRejectClick = () => {
    console.log('거부 버튼 클릭 - 이전 페이지 이동')
  }

  // 동의하고 가기 버튼을 클릭했을 때 (막기)
  const handleSubmitClick = () => {
    if (!isConsented) return
    console.log('동의 완료 - 다음 로직 실행')
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
              거부
            </Button>

            <Button color='yellow' onClick={handleSubmitClick} disabled={!isConsented}>
              동의하고 가기
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default AgreementPage
