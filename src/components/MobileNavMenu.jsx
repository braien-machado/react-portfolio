import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MenuLinks from './MenuLinks';

export default function MobileNavMenu() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(isMenuHidden ? false : true);
  };

  return (
    <div className="sm:hidden h-7">
      <nav className={`${isMenuHidden ? '-left-60' : 'left-0'} flex flex-col justify-between items-center absolute top-0 w-60 bg-zinc-800 h-screen duration-300 z-10`}>
        <MenuLinks toggleMenu={toggleMenu}/>
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
