import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiBattleAxe, GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Header () {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const { pathname } = useLocation();

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
    if (pathname === path) {
      return (
        <li key={ link } className='py-4 w-60 text-center font-medium text-black bg-white'>
        { link }
      </li>
      )
    }
    return (
      <Link key={ link } to={ path }>
        <li className='py-4 w-60 text-center hover:font-medium hover:bg-gray-700 hover:cursor-pointer text-white'>
          { link }
        </li>
      </Link>
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
