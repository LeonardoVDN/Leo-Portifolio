import { create } from 'zustand'

// 1. Definimos o formato de um Projeto
interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  link: string;
}

// 2. Definimos o formato da nossa Store
interface ProjectStore {
  projects: Project[];
  // No futuro, poderíamos ter actions aqui, ex: addProject: (p: Project) => void
}

// 3. Criamos a Store
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useProjectStore = create<ProjectStore>((set) => ({
  // Aqui dentro fica o "State" (como o state() do Pinia/Vuex)
  projects: [
    {
      id: 1,
      title: "Menu QR Code",
      description: "Sistema de checkout para cardápios digitais com frontend reativo.",
      techs: ['Vue 3', 'Python', 'Docker'],
      link: "https://github.com/seu-usuario/menu-qr-code"
    },
    {
      id: 2,
      title: "Isos Management",
      description: "Plataforma de gestão empresarial com arquitetura robusta.",
      techs: ['Django', 'React', 'PostgreSQL'],
      link: "https://github.com/seu-usuario/isos-management"
    },
    // Adicione mais projetos aqui se quiser
  ]
}))