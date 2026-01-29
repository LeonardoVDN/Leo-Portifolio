import './App.css'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import { useState } from 'react'

function App() {

  const [activeTech, setActiveTech] = useState('');

  const projects = [
    {
      id: 1,
      title: "Menu QR Code",
      description: "Sistema de checkout para cardápios digitais com frontend reativo.",
      techs: ['Vue 3', 'Docker'],
      link: "https://github.com/seu-usuario/menu-qr-code"
    },
    {
      id: 2,
      title: "Isos Management",
      description: "Plataforma de gestão empresarial com arquitetura robusta.",
      techs: ['Django', 'React', 'PostgreSQL'],
      link: "https://github.com/seu-usuario/isos-management"
    },
  ]

  // Se activeTech estiver vazio, mostra tudo.
  // Se não, filtra projetos que tenham a tech incluída na lista 'techs'
  const filteredProjects = activeTech 
    ? projects.filter(project => project.techs.includes(activeTech))
    : projects;

  return (
    <div>
      <Header />
        <div style={{ padding: '20px' }}>
        <h2>Meus Projetos</h2>

        {/* --- Área dos Botões de Filtro --- */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <button onClick={() => setActiveTech('')}>Todos</button>
          <button onClick={() => setActiveTech('Vue 3')}>Vue 3</button>
          <button onClick={() => setActiveTech('Python')}>Python</button>
          <button onClick={() => setActiveTech('React')}>React</button>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {/* MUDANÇA AQUI: Usamos 'filteredProjects' em vez de 'projects' */}
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              techs={project.techs}
              link={project.link}
            />
          ))}
        </div>
        
        {/* Feedback visual se não houver projetos */}
        {filteredProjects.length === 0 && (
          <p>Nenhum projeto encontrado com essa tecnologia.</p>
        )}

      </div>
    </div>
  )
}

export default App
