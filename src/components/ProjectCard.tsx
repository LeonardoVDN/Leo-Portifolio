import styles from './ProjectCard.module.css'
import { techMap } from '../utils/techMap';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

function ProjectCard({ title, description, techs, link }: ProjectCardProps) {
  
    return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
      
      <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <strong>Techs: </strong>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          {techs.map((techName) => (
            <span key={techName} title={techName}>
              {/* O TypeScript agora entende que isso retorna um JSX.Element ou undefined */}
              {techMap[techName] || techName}
            </span>
          ))}
        </div>
      </div>  

        <a
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
            display: 'inline-block',
            padding: '8px 16px',
            marginTop: '10px',
            backgroundColor: '#61dafb',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
        }}
        >
        Acessar Projeto
      </a>

    </div>
  )
}

export default ProjectCard