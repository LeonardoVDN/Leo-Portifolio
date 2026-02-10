import { create } from 'zustand'

export interface Project {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  techs: string[];
  link: string;
}

interface ProjectStore {
  projects: Project[];
}

export const useProjectStore = create<ProjectStore>(() => ({
  projects: [
    {
      id: 1,
      title: "Menu QR Code",
      description: "Sistema de checkout para cardápios digitais com frontend reativo e backend robusto.",
      challenge: "Restaurantes precisavam de uma solução digital que substituísse cardápios físicos, integrando pedidos em tempo real com o sistema de cozinha, sem latência perceptível para o usuário.",
      solution: "Arquitetura desacoplada com Vue 3 no frontend consumindo uma API REST em Python. Containerização com Docker para garantir paridade entre ambientes de desenvolvimento e produção.",
      techs: ['Vue 3', 'Python', 'Docker'],
      link: "https://github.com/seu-usuario/menu-qr-code"
    },
    {
      id: 2,
      title: "Isos Management",
      description: "Plataforma de gestão empresarial com arquitetura robusta e interface intuitiva.",
      challenge: "A empresa necessitava de um sistema centralizado para gerenciar processos internos, substituindo planilhas dispersas por uma plataforma única com controle de acesso e auditoria.",
      solution: "Backend em Django com ORM otimizado para queries complexas e frontend em React com componentização modular. Banco de dados PostgreSQL para integridade transacional.",
      techs: ['Django', 'React', 'PostgreSQL'],
      link: "https://github.com/seu-usuario/isos-management"
    },
  ]
}))
