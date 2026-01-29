import { FaReact, FaPython, FaDocker, FaVuejs } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiTypescript } from 'react-icons/si'
import type { JSX } from 'react'

// Aqui fica a ÚNICA fonte de verdade sobre os ícones
export const techMap: Record<string, JSX.Element> = {
    'React': <FaReact color="#61DAFB" size={24} />,
    'Python': <FaPython color="#3776AB" size={24} />,
    'Docker': <FaDocker color="#2496ED" size={24} />,
    'Vue 3': <FaVuejs color="#4FC08D" size={24} />,
    'Django': <SiDjango color="#092E20" size={24} />,
    'PostgreSQL': <SiPostgresql color="#4169E1" size={24} />,
    'TypeScript': <SiTypescript color="#3178C6" size={24} />
};