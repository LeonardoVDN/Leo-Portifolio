import type { JSX } from 'react';
import styles from './ProjectCard.module.css'
import { FaReact, FaPython, FaDocker, FaVuejs } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiTypescript } from 'react-icons/si'

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

function ProjectCard({ title, description, techs, link }: ProjectCardProps) {
    
    // "Um dicionário onde a CHAVE é uma string e o VALOR é um elemento JSX (ícone)"
    const techIcons: Record<string, JSX.Element> = {
        'React': <FaReact color="#61DAFB" size={20} />,
        'Python': <FaPython color="#3776AB" size={20} />,
        'Docker': <FaDocker color="#2496ED" size={20} />,
        'Vue 3': <FaVuejs color="#4FC08D" size={20} />,
        'Django': <SiDjango color="#092E20" size={20} />,
        'PostgreSQL': <SiPostgresql color="#4169E1" size={20} />,
        'TypeScript': <SiTypescript color="#3178C6" size={20} />
    };
  
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
              {techIcons[techName] || techName}
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