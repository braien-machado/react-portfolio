import { useState } from 'react';
import MenuLinks from './MenuLinks';

export default function DesktopNavMenu() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  return (
    <div className="hidden sm:block">
      <MenuLinks toggleMenu={() => setIsMenuHidden(!isMenuHidden)} />
    </div>
  );
}
