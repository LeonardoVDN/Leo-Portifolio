import styles from './Home.module.css'
import ProjectCard from '../components/ProjectCard'
import { useProjectStore } from '../store/useProjectStore'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaReact, FaPython, FaDocker, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiDjango, SiTypescript, SiPostgresql, SiVite } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'

const techStack = [
  { name: 'React', icon: <FaReact size={32} color="#61DAFB" />, level: 'Avançado' },
  { name: 'TypeScript', icon: <SiTypescript size={28} color="#3178C6" />, level: 'Avançado' },
  { name: 'Python', icon: <FaPython size={32} color="#4B8BBE" />, level: 'Avançado' },
  { name: 'Django', icon: <SiDjango size={28} color="#44B78B" />, level: 'Avançado' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={28} color="#699ECA" />, level: 'Intermediário' },
  { name: 'Docker', icon: <FaDocker size={32} color="#2496ED" />, level: 'Intermediário' },
  { name: 'Git', icon: <FaGitAlt size={32} color="#F05032" />, level: 'Avançado' },
  { name: 'Vite', icon: <SiVite size={28} color="#646CFF" />, level: 'Intermediário' },
]

const marqueeItems = [
  'React', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Git',
  'Vite', 'REST APIs', 'Clean Architecture', 'CSS Modules', 'Zustand',
]

function Home() {
  const projects = useProjectStore((state) => state.projects)

  const [aboutRef, aboutVisible] = useScrollReveal()
  const [stackRef, stackVisible] = useScrollReveal()
  const [projectsRef, projectsVisible] = useScrollReveal()
  const [contactRef, contactVisible] = useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroAurora} />
          <div className={styles.orbPurple} />
          <div className={styles.orbBlue} />
          <div className={styles.gridOverlay} />
        </div>

        <span className={styles.heroLabel}>Fullstack Web Developer</span>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGradient}>
            Construindo aplicações web escaláveis com foco em{' '}
          </span>
          <span className={styles.heroTitleAccent}>
            arquitetura e performance.
          </span>
        </h1>
        <p className={styles.heroSubtitle}>
          React, Python/Django e boas práticas de engenharia de software
          para criar soluções robustas e elegantes.
        </p>
        <div className={styles.heroCta}>
          <a href="#projects" className={styles.btnPrimary}>Ver Projetos</a>
          <a href="#about" className={styles.btnSecondary}>Sobre Mim</a>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      {/* About */}
      <section
        id="about"
        ref={aboutRef}
        className={`${styles.about} ${aboutVisible ? styles.revealVisible : styles.reveal}`}
      >
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <span className={styles.aboutLabel}>Sobre</span>
            <h2 className={styles.aboutTitle}>
              Código limpo é apenas o começo.
            </h2>
          </div>
          <div>
            <div className={styles.aboutText}>
              <p>
                Sou estudante de Ciência da Computação com foco em desenvolvimento Fullstack.
                Meu interesse vai além de escrever código que funciona — busco entender como
                o software interage com o hardware e como decisões arquiteturais impactam
                a escalabilidade e manutenção de um sistema.
              </p>
              <p>
                Valorizo a estrutura do código tanto quanto o resultado visual.
                Design patterns, separação de responsabilidades e testes não são
                burocracia — são o que separa software profissional de protótipos.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>React</div>
                <div className={styles.statLabel}>Frontend Framework</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>Django</div>
                <div className={styles.statLabel}>Backend Framework</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>Python</div>
                <div className={styles.statLabel}>Linguagem Principal</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>Clean</div>
                <div className={styles.statLabel}>Architecture First</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      {/* Tech Stack */}
      <section
        id="stack"
        ref={stackRef}
        className={`${styles.stack} ${stackVisible ? styles.revealVisible : styles.reveal}`}
      >
        <span className={styles.stackLabel}>Tech Stack</span>
        <h2 className={styles.stackTitle}>Ferramentas do dia a dia.</h2>
        <div className={styles.stackGrid}>
          {techStack.map((tech) => (
            <div key={tech.name} className={styles.stackCard}>
              <div className={styles.stackIcon}>{tech.icon}</div>
              <span className={styles.stackName}>{tech.name}</span>
              <span className={styles.stackLevel}>{tech.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Marquee */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      {/* Projects */}
      <section
        id="projects"
        ref={projectsRef}
        className={`${styles.projects} ${projectsVisible ? styles.revealVisible : styles.reveal}`}
      >
        <div className={styles.projectsHeader}>
          <div>
            <span className={styles.projectsLabel}>Projetos</span>
            <h2 className={styles.projectsTitle}>Trabalho selecionado.</h2>
          </div>
          <span className={styles.projectsCount}>
            {projects.length} projeto{projects.length !== 1 && 's'}
          </span>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techs={project.techs}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      {/* Contact */}
      <section
        id="contact"
        ref={contactRef}
        className={`${styles.contact} ${contactVisible ? styles.revealVisible : styles.reveal}`}
      >
        <div className={styles.contactGlow} />
        <span className={styles.contactLabel}>Contato</span>
        <h2 className={styles.contactTitle}>Vamos conversar?</h2>
        <p className={styles.contactSubtitle}>
          Estou aberto a oportunidades, colaborações e boas conversas
          sobre engenharia de software.
        </p>

        <a
          href="mailto:seu-email@exemplo.com"
          className={styles.contactEmail}
        >
          <HiOutlineMail size={18} />
          Enviar e-mail
        </a>

        <p className={styles.contactOr}>ou encontre-me em</p>

        <div className={styles.contactLinks}>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaGithub size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Projetado e desenvolvido por <span>Leonardo Valentim</span>
        </p>
      </footer>
    </>
  )
}

export default Home
