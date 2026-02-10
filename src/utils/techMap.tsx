import { FaReact, FaPython, FaDocker, FaVuejs } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiTypescript } from 'react-icons/si'
import type { JSX } from 'react'

export const techMap: Record<string, JSX.Element> = {
    'React': <FaReact color="#61DAFB" size={16} />,
    'Python': <FaPython color="#4B8BBE" size={16} />,
    'Docker': <FaDocker color="#2496ED" size={16} />,
    'Vue 3': <FaVuejs color="#42B883" size={16} />,
    'Django': <SiDjango color="#44B78B" size={16} />,
    'PostgreSQL': <SiPostgresql color="#699ECA" size={16} />,
    'TypeScript': <SiTypescript color="#3178C6" size={16} />
};
