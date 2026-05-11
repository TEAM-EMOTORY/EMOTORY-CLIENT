import AgreementPage from '../agreement/agreement'
import * as styles from './home.css'

const HomePage = () => {
  return (
    <div className={styles.bgcolor}>
      <h1>🏠 홈 (시작 화면)</h1>
      <p className={styles.fontstyle}>EMOTORY: 아이들을 위한 AI 감정 스토리텔링 서비스입니다.</p>
      <button type='button' onClick={AgreementPage}>
        동의하고 진행하기
      </button>
    </div>
  )
}

export default HomePage
