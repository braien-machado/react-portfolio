import React from 'react';
import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';

export default function Header () {
  return (
    <header className='flex justify-end p-2 fixed w-full bg-zinc-800 z-10 border-b-[1px] border-zinc-700'>
      <DesktopNavMenu />
      <MobileNavMenu />
    </header>
  );
}
