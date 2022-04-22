import React, { useState } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu, GiBattleAxe } from 'react-icons/gi';
import MenuLinks from './MenuLinks';

export default function MobileNavMenu(props) {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(isMenuHidden ? false : true);
  };

  return (
    <div className="sm:hidden h-7">
      <nav className={`${isMenuHidden ? '-left-60' : 'left-0'} flex flex-col justify-between items-center absolute top-0 w-60 bg-zinc-800 h-screen duration-300 z-10`}>
        <MenuLinks toggleMenu={toggleMenu}/>
        <div className='flex w-full text-white justify-evenly'>
          <a className='hover:text-blue-400 duration-200' href='https://github.com/braien-machado' target='_blank' rel='noreferrer'>
              <AiOutlineGithub size={50} />
          </a>
          <a className='hover:text-blue-400 duration-200' href='https://linkedin.com/in/braien-machado' target='_blank' rel='noreferrer'>
            <AiFillLinkedin size={50} />
          </a>
        </div>
        <div className='pb-14'>
          <GiBattleAxe className='text-white' size={100} />
        </div>
      </nav>
      { isMenuHidden ? null : (
        <button className={`fixed cursor-default bg-black opacity-80 w-screen h-screen top-0 left-0`} onClick={toggleMenu}></button>
      )}
      <button className='w-fit'>
        <GiHamburgerMenu className='text-white' size={30} onClick={ toggleMenu }/>
      </button>
    </div>
  )
}
