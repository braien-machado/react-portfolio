import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MenuLinks from './MenuLinks';

export default function MobileNavMenu() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="sm:hidden h-7">
      <nav
        className={`${
          isMenuHidden ? '-left-60' : 'left-0'
        } absolute top-0 w-60 bg-zinc-800 h-screen duration-300 z-10`}
      >
        <MenuLinks toggleMenu={toggleMenu} />
      </nav>
      {!isMenuHidden && (
        <button
          type="button"
          className="fixed cursor-default bg-black opacity-80 w-screen h-screen top-0 left-0"
          onClick={toggleMenu}
        >
          Fechar
        </button>
      )}
      <button type="button" className="w-fit" onClick={toggleMenu}>
        <GiHamburgerMenu
          className="text-white hover:text-green-300 transition-colors"
          size={30}
        />
      </button>
    </div>
  );
}
