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

  return (
    <div key={index} className='border-gray-800 border-2 hover:border-gray-300 duration-300 shadow-md rounded-md w-4/5 p-2 mb-4'>
      <img src={image} alt={`${name} cover`} />
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <h2>Stacks</h2>
        {
          stacks.map((stack, i) => (<li key={`${stack}-${i}`}>{stack}</li>))
        }
      </ul>
      <a href={demo} target='_blank' rel='noreferrer'>Demo</a>
      <a href={repository} target='_blank' rel='noreferrer'>Repository</a>
    </div>
  );
}
