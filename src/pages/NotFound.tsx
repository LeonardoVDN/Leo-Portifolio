import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import { useNavigationStore } from '../store/useNavigationStore'

function NotFound() {
  const setDirection = useNavigationStore((state) => state.setDirection)

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.orbPurple} />
        <div className={styles.orbBlue} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.glitchWrapper}>
          <span className={styles.code} data-text="404">404</span>
        </div>

        <div className={styles.dividerLine} />

        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.subtitle}>
          O conteúdo que você procura não existe ou foi movido para outro endereço.
        </p>

        <Link
          to="/"
          className={styles.btnHome}
          onClick={() => setDirection('back')}
        >
          <span className={styles.btnText}>Voltar ao início</span>
          <span className={styles.btnArrow}>&larr;</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
