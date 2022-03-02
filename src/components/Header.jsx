import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiBattleAxe, GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

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
      <Link key={ link } to={ path } onClick={ toggleMenu } >
        <li className='py-4 w-60 text-center hover:font-medium hover:bg-gray-700 hover:cursor-pointer text-white duration-200'>
          { link }
        </li>
      </Link>
    );
  };

  return (
    <header className='flex justify-between p-2 fixed w-full bg-gray-900 shadow-slate-700 shadow-sm z-10'>
      <GiBattleAxe className='text-white' size={30} />
      <div className={`${isMenuHidden ? 'hidden' : ''} fixed bg-black opacity-80 w-screen h-screen top-0 left-0`} onClick={toggleMenu}></div>
      <nav className={`${isMenuHidden ? '-left-60' : 'left-0'} flex flex-col justify-between items-center absolute top-0 w-60 bg-gray-800 h-screen duration-300 z-10`}>
        <ul className='flex flex-col items-center text-lg w-fit'>
          { menuLinks.map((link) => generateMenuLink(link)) }
        </ul>
        <div className='flex w-full text-white justify-evenly'>
          <a className='hover:text-gray-500 duration-200' href='https://github.com/braien-machado' target='_blank' rel='noreferrer'>
              <AiOutlineGithub size={50} />
          </a>
          <a className='hover:text-gray-500 duration-200' href='https://linkedin.com/in/braien-machado' target='_blank' rel='noreferrer'>
            <AiFillLinkedin size={50} />
          </a>
        </div>
        <div className='pb-14'>
          <GiBattleAxe className='text-white' size={100} />
        </div>
      </nav>
      <button className='w-fit'>
        <GiHamburgerMenu className='text-white' size={30} onClick={ toggleMenu }/>
      </button>
    </header>
  );
}
