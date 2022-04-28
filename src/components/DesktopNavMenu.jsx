import React, { useState } from 'react';
import MenuLinks from './MenuLinks';

export default function DesktopNavMenu(props) {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(isMenuHidden ? false : true);
  };

  return (
    <div className="hidden sm:block">
      <MenuLinks toggleMenu={toggleMenu}/>
    </div>
  )
}
