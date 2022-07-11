import React from 'react'

export default function MenuLinks({ toggleMenu }) {

  const menuLinks = [
    { link: 'Início', id: '#home'},
    { link: 'Habilidades', id: '#skills'},
    { link: 'Projetos', id: '#projects'},
    { link: 'Sobre mim', id: '#about'},
  ];

  const generateMenuLink = ({ link, id }) => {
    return (
      <a className="sm:mx-4" href={id} key={ link } to={ id } onClick={ () => {
        toggleMenu()
      }}>
        <li className='w-fit text-center hover:text-green-300 hover:cursor-pointer text-white transition-colors'>
          { link }
        </li>
      </a>
    );
  };

  return (
    <ul className='flex flex-col w-full sm:flex-row items-center text-lg mt-4 sm:mt-0 gap-4 sm:gap-0'>
      {menuLinks.map((link) => generateMenuLink(link))}
    </ul>
  )
}
