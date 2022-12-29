import { useState } from 'react';
import MenuLinks from './MenuLinks';

export default function DesktopNavMenu() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="hidden sm:block">
      <MenuLinks toggleMenu={toggleMenu} />
    </div>
  );
}
