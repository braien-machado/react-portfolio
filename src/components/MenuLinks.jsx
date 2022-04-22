import React, { useState } from 'react'

export default function MenuLinks({ toggleMenu }) {
  const [section, setSection] = useState('#about');

  const menuLinks = [
    { link: 'Início', id: '#home'},
    { link: 'Habilidades', id: '#skills'},
    { link: 'Projetos', id: '#projects'},
    { link: 'Sobre mim', id: '#about'},
  ];

  const generateMenuLink = ({ link, id }) => {
    if (section === id) {
      return (
        <li key={ link } className='py-4 w-60 text-center text-white bg-zinc-900'>
        { link }
      </li>
      )
    }
    return (
      <a href={id} key={ link } to={ id } onClick={ () => {
        setSection(id);
        toggleMenu()
      }}>
        <li className='py-4 w-60 text-center hover:bg-zinc-500 hover:cursor-pointer text-white duration-200'>
          { link }
        </li>
      </a>
    );
  };

  return (
    <ul className='flex flex-col items-center text-lg w-fit'>
      {menuLinks.map((link) => generateMenuLink(link))}
    </ul>
  )
}
