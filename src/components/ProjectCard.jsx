import React from 'react'

export default function ProjectCard(props) {
  const { name, description, image, demo, repository, stacks = [] } = props.project;
  const { index } = props.index;

  if (!name) {
    return (
      <div key={index} className='border-zinc-700 border-2 shadow-md duration-300 rounded-md w-4/5 p-2 mb-4'>
        <h1 className='text-2xl font-medium'>Em breve</h1>
        <p className='italic text-gray-500'>Projeto em desenvolvimento...</p>
      </div>
    );
  }

  return (
    <div key={index} className='border-zinc-700 border-2 hover:border-green-300 text-gray-500 hover:text-gray-400 transition-colors shadow-md rounded-md w-4/5 p-2 mb-4 lg:flex lg:flex-row-reverse lg:justify-end lg:items-center'>
      <img  className='object-cover w-full lg:w-1/2 lg:object-contain rounded-t-md lg:rounded-none' src={`/src/assets/${image}`} alt={`${name} cover`} />
      <div className='lg:w-1/2 mt-2 lg:mt-0 lg:mr-2 lg:text-center lg:flex lg:h-full lg:flex-col lg:justify-around'>
        <h1 className='text-2xl font-medium text-gray-100'>{name}</h1>
        <p className='italic'>{description}</p>
        <ul className='list-inside list-square'>
          <h2 className='text-md font-medium text-gray-100'>Ferramentas</h2>
          <div className='flex lg:justify-evenly flex-wrap'>
            {
              stacks.map((stack, i) => (
                <li key={`${stack}-${i}`} className='italic mx-2'>{stack}</li>
              ))
            }
          </div>
        </ul>
        <div className='mt-2 flex justify-evenly flex-wrap'>
          <a  href={demo} target='_blank' rel='noreferrer'>
            <button className='p-2 w-40 border-2 border-zinc-700 hover:bg-green-300 hover:border-green-300 text-gray-500 hover:text-white rounded-md transition-colors mb-2'>Demonstração</button>
          </a>
          <a href={repository} target='_blank' rel='noreferrer'>
            <button className='p-2 w-40 border-2 border-zinc-700 hover:bg-green-300 hover:border-green-300 text-gray-500 hover:text-white rounded-md transistion-colors'>Repositório</button>
          </a>
        </div>
      </div>
    </div>
  );
}
