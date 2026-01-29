import styles from './ProjectCard.module.css'

// 1. A Interface (O Contrato)
// Isso é puro TypeScript. Define o formato dos dados.
interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[]; // Uma lista de strings (ex: ['Vue', 'Docker'])
  link: string;
}

// 2. O Componente
// Recebemos "props" como argumento da função e desestruturamos
function ProjectCard({ title, description, techs, link }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
      
      {/* 3. Renderizando uma lista (Loop) */}
      {/* No Vue seria v-for. No React, usamos .map() do JavaScript */}
      <div>
        <strong>Techs: </strong>
        {techs.join(', ')}
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