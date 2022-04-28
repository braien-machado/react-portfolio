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
        <li className='py-4 sm:py-0 w-60 sm:w-fit text-center hover:text-blue-400 hover:cursor-pointer text-white duration-200'>
          { link }
        </li>
      </a>
    );
  };

  return (
    <ul className='flex flex-col sm:flex-row items-center text-lg w-fit'>
      {menuLinks.map((link) => generateMenuLink(link))}
    </ul>
  )
}
