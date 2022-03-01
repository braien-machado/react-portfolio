import React from 'react';
import ProjectsLibrary from '../components/ProjectsLibrary';

export default function Projects() {
  return (
    <main className='min-h-screen py-12  bg-gray-900 text-white'>
      <h1 className='text-4xl text-center my-4'>Projetos</h1>
      <ProjectsLibrary />
    </main>
  );
}
