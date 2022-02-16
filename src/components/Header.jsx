import React, { useState } from 'react';
import { GiBattleAxe, GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Header () {
  const [isHidden, setIsHidden] = useState('hidden');

  const toggleMenu = () => {
    setIsHidden(isHidden === 'hidden' ? '' : 'hidden')
  };

  return (
    <header className='flex justify-between p-2'>
      <GiBattleAxe size={30} />
      <nav className={`${isHidden}`}>
        <ul className='flex justify-around'>
          <li>Sobre mim</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
      <button className='w-fit'>
        {
          isHidden ? (
            <GiHamburgerMenu size={30} onClick={ toggleMenu }/>
          ) : (
            <GrClose size={30} onClick={ toggleMenu }/>
          )
        }
      </button>
    </header>
  )
}
