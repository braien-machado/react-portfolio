import React, { useState } from 'react';
import { GiBattleAxe, GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Header () {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(isMenuHidden ? false : true);
  };

  const menuLinks = ['Sobre mim', 'Habilidades', 'Projetos', 'Contato'];

  const generateMenuLink = (link) => {
    return (
      <li className='mt-4 hover:underline hover:font-medium hover:cursor-pointer text-white'>{ link }</li>
    );
  };

  return (
    <header className='flex justify-between p-2 relative bg-gray-900'>
      <GiBattleAxe className='text-white' size={30} />
      <nav className={`${isMenuHidden ? '-left-60' : 'left-0'} absolute top-0 w-60 bg-gray-900 h-screen duration-300`}>
        <ul className='flex flex-col items-center text-lg w-fit m-auto'>
          { menuLinks.map((link) => generateMenuLink(link)) }
        </ul>
      </nav>
      <button className='w-fit'>
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
