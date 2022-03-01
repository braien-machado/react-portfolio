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
    <div key={index} className='border-gray-800 border-2 hover:border-gray-300 duration-300 shadow-md rounded-md w-4/5 p-2 mb-4 md:flex md:flex-row-reverse md:justify-end md:items-center'>
      <img  className='object-cover w-full md:w-1/2 md:object-contain rounded-t-md border-b-2 md:border-0 border-gray-800' src={require(`../images/${image}`)} alt={`${name} cover`} />
      <div className='md:w-1/2 md:text-center md:flex md:h-full md:flex-col md:justify-around'>
        <h1 className='text-2xl font-medium'>{name}</h1>
        <p className='italic text-gray-500'>{description}</p>
        <ul className='list-inside list-square'>
          <h2 className='text-lg font-medium'>Ferramentas</h2>
          <div className='flex md:justify-evenly md:flex-wrap'>
            {
              stacks.map((stack, i) => (
                <div key={`${stack}-${i}`} className='mx-1'>
                  <li className='italic text-gray-500'>{stack}</li>
                </div>
              ))
            }
          </div>
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
    </div>
  );
}
