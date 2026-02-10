import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={styles.header}>
      <div
        className={styles.scrollProgress}
        style={{ width: `${scrollProgress}%` }}
      />
      <div className={styles.headerInner}>
        <Link to="/" className={styles.logo}>
          Leonardo Valentim
        </Link>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>Sobre</a>
          <a href="#stack" className={styles.navLink}>Stack</a>
          <a href="#projects" className={styles.navLink}>Projetos</a>
          <a href="#contact" className={styles.navLink}>Contato</a>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            <span className={styles.statusDot} />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
