import React from 'react';
import ProjectCard from './ProjectCard';

const projectsInfo = [
  {},
  {
    name: 'App de Receitas',
    description: 'Aplicativo para consulta de receitas'
  }
];

export default function ProjectsLibrary() {
  return (
    <div className='flex justify-evenly flex-wrap'>
      { projectsInfo.map((project, index) => (
        <ProjectCard project={project} index={index} />
      )) }
    </div>
  )
}
