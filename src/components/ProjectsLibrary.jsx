import React from 'react';
import ProjectCard from './ProjectCard';
import projectsInfo from '../projectsInfo';

export default function ProjectsLibrary() {
  return (
    <div className='flex justify-evenly flex-wrap'>
      { projectsInfo.map((project, index) => (
        <ProjectCard project={project} index={index} />
      )) }
    </div>
  )
}
