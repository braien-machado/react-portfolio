import React from 'react';
import { GiBattleAxe } from 'react-icons/gi';

import MobileNavMenu from './MobileNavMenu';

export default function Header () {
  return (
    <header className='flex justify-between p-2 fixed w-full bg-zinc-800 z-10'>
      <GiBattleAxe className='text-white' size={30} />
      <MobileNavMenu />
    </header>
  );
}
