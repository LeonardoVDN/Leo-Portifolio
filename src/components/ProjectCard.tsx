import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { techMap } from '../utils/techMap'
import { useNavigationStore } from '../store/useNavigationStore'

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  techs: string[];
  index: number;
}

function ProjectCard({ id, title, description, techs, index }: ProjectCardProps) {
  const setDirection = useNavigationStore((state) => state.setDirection)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  return (
    <Link
      to={`/project/${id}`}
      className={styles.cardLink}
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={() => setDirection('forward')}
    >
      <div className={styles.card} onMouseMove={handleMouseMove}>
        <div className={styles.cardGlow} />
        <div className={styles.cardSpotlight} />
        <div className={styles.cardContent}>
          <div className={styles.cardNumber}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.techs}>
            {techs.map((techName) => (
              <span key={techName} className={styles.techTag}>
                {techMap[techName]}
                {techName}
              </span>
            ))}
          </div>

          <span className={styles.link}>
            Ver case study <span className={styles.arrow}>&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
