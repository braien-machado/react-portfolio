import React from 'react'

export default function ProjectCard(props) {
  const { name, description, image, demo, repository, stacks = [] } = props.project;
  const { index } = props.index;

  if (!name) {
    return (
      <div key={index} className='border-gray-800 border-2 hover:border-gray-300 shadow-md duration-300 rounded-md w-4/5 p-2 mb-4'>
        <h1 className='text-2xl font-medium'>Em breve</h1>
        <p className='italic text-gray-500'>Projeto em desenvolvimento...</p>
      </div>
    );
  }

  return (
    <div key={index} className='border-gray-800 border-2 hover:border-gray-300 duration-300 shadow-md rounded-md w-4/5 p-2 mb-4'>
      <img  className='object-cover w-full rounded-t-md border-b-2 border-gray-800' src={require(`../images/${image}`)} alt={`${name} cover`} />
      <h1 className='text-2xl font-medium'>{name}</h1>
      <p className='italic text-gray-500'>{description}</p>
      <ul className='list-inside list-square'>
        <h2 className='text-lg font-medium'>Stacks</h2>
        {
          stacks.map((stack, i) => (<li className='italic text-gray-500' key={`${stack}-${i}`}>{stack}</li>))
        }
      </ul>
      <div className='mt-2 flex justify-evenly flex-wrap'>
        <a  href={demo} target='_blank' rel='noreferrer'>
          <button className='p-2 w-40 border-2 border-gray-800 hover:bg-gray-800 text-gray-500 hover:text-white hover:underline rounded-md duration-300 mb-2'>Demonstração</button>
        </a>
        <a href={repository} target='_blank' rel='noreferrer'>
          <button className='p-2 w-40 border-2 border-gray-800 hover:bg-gray-800 text-gray-500 hover:text-white hover:underline rounded-md duration-300'>Repositório</button>
        </a>
      </div>
    </div>
  );
}
