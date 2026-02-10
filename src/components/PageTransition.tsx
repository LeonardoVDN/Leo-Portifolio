import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigationStore } from '../store/useNavigationStore'
import styles from './PageTransition.module.css'

interface PageTransitionProps {
  children: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const direction = useNavigationStore((state) => state.direction)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const animationClass = direction === 'forward'
    ? styles.slideFromRight
    : styles.slideFromLeft

  return (
    <div key={location.pathname} className={animationClass}>
      {children}
    </div>
  )
}

export default PageTransition
