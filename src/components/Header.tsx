import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';

import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <DesktopNavMenu />
      <MobileNavMenu />
    </header>
  );
}
