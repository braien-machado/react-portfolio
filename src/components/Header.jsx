import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiBattleAxe, GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Header () {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(isMenuHidden ? false : true);
  };

  const menuLinks = [
    { link: 'Sobre mim', path: '/'},
    { link: 'Habilidades', path: '/skills'},
    { link: 'Projetos', path: '/projects'},
    { link: 'Contato', path: '/contactme'},
  ];

  const generateMenuLink = ({ link, path }, index) => {
    return (
      <li key={ link } className='mt-4 hover:underline hover:font-medium hover:cursor-pointer text-white'>
        <Link to={ path }>
          { link }
        </Link>
      </li>
    );
  };

  return (
    <header className='flex justify-between p-2 absolute w-full bg-gray-900 shadow-slate-700 shadow-sm'>
      <GiBattleAxe className='text-white' size={30} />
      <nav className={`${isMenuHidden ? '-left-60' : 'left-0'} flex flex-col justify-between items-center absolute top-0 w-60 bg-gray-800 h-screen duration-300 z-10`}>
        <ul className='flex flex-col items-center text-lg w-fit'>
          { menuLinks.map((link) => generateMenuLink(link)) }
        </ul>
        <div className='pb-14'>
          <GiBattleAxe className='text-white' size={100} />
        </div>
      </nav>
      <button className='w-fit absolute z-10 right-2'>
        {
          isMenuHidden ? (
            <GiHamburgerMenu className='text-white' size={30} onClick={ toggleMenu }/>
          ) : (
            <GrClose className='bg-white' size={30} onClick={ toggleMenu }/>
          )
        }
      </button>
    </header>
  );
}
