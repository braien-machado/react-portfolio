import React from 'react'

export default function ProjectCard(props) {
  const { name, description, image, demo, repository, stacks = [] } = props.project;
  const { index } = props.index;

  if (!name) {
    return (
      <div className='border-gray-800 border-2 hover:border-gray-300 shadow-md duration-300 rounded-md w-4/5 p-2 mb-4'>
        <h1 className='text-2xl font-medium'>Em breve</h1>
        <p className='italic text-gray-500'>Projeto em desenvolvimento...</p>
      </div>
    );
  }
}
