import { useParams, Link } from 'react-router-dom'
import { useProjectStore } from '../store/useProjectStore'
import { useNavigationStore } from '../store/useNavigationStore'
import { techMap } from '../utils/techMap'
import styles from './ProjectDetails.module.css'

function ProjectDetails() {
  const { id } = useParams()
  const projects = useProjectStore((state) => state.projects)
  const setDirection = useNavigationStore((state) => state.setDirection)
  const project = projects.find(p => p.id === Number(id))

  const handleBack = () => setDirection('back')

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2 className={styles.notFoundTitle}>Projeto não encontrado</h2>
        <Link to="/" className={styles.notFoundLink} onClick={handleBack}>
          &larr; Voltar para Home
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} />

      <div className={styles.backBar}>
        <Link to="/" className={styles.backLink} onClick={handleBack}>
          &larr; Voltar
        </Link>
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
      </header>

      <div className={styles.content}>
        <div className={styles.section}>
          <span className={styles.sectionLabel}>01 — O Desafio</span>
          <h3 className={styles.sectionTitle}>Problema</h3>
          <p className={styles.sectionText}>{project.challenge}</p>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionLabel}>02 — A Solução</span>
          <h3 className={styles.sectionTitle}>Abordagem</h3>
          <p className={styles.sectionText}>{project.solution}</p>
        </div>
      </div>

      <div className={styles.stackSection}>
        <span className={styles.sectionLabel}>03 — Stack</span>
        <div className={styles.techList}>
          {project.techs.map((tech) => (
            <span key={tech} className={styles.techItem}>
              {techMap[tech]}
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnGithub}
        >
          Ver no GitHub &rarr;
        </a>
        <Link to="/" className={styles.btnBack} onClick={handleBack}>
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetails
