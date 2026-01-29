import { useParams, Link } from 'react-router-dom'
import { useProjectStore } from '../store/useProjectStore'
import { techMap } from '../utils/techMap'

function ProjectDetails() {
  const { id } = useParams() 
  const projects = useProjectStore((state) => state.projects)
  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        <h2>Projeto não encontrado!</h2>
        <Link to="/" style={{ color: '#61dafb' }}>Voltar</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      
      <h1>{project.title}</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{project.description}</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Tecnologias:</h3>
        
        {/* 3. Renderização com Ícones (sem bolinhas de lista) */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            {project.techs.map(tech => (
              <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {/* Tenta mostrar o ícone. Se não achar, mostra só o texto */}
                  {techMap[tech] || <span>{tech}</span>} 
                  
                  {/* Opcional: Mostrar o nome ao lado do ícone para ficar claro */}
                  <span>{tech}</span>
              </div>
            ))}
        </div>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
        <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            style={{ 
                backgroundColor: 'transparent',
                color: '#61dafb', 
                border: '1px solid #61dafb', 
                padding: '12px 24px', 
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                transition: 'all 0.2s'
            }}
        >
            Ver no GitHub
        </a>

        <Link to="/" style={{ color: '#aaa', textDecoration: 'none', padding: '12px', alignSelf: 'center' }}>
             Voltar para Home
        </Link>
      </div>

    </div>
  )
}

export default ProjectDetails