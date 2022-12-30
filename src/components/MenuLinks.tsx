import './MenuLinks.css';

interface menuLinkProps {
  link: string;
  id: string;
}

interface MenuLinksProps {
  toggleMenu: () => void;
}

export default function MenuLinks({ toggleMenu }: MenuLinksProps) {
  const menuLinks: menuLinkProps[] = [
    { link: 'Início', id: '#home' },
    { link: 'Habilidades', id: '#skills' },
    { link: 'Projetos', id: '#projects' },
    { link: 'Sobre mim', id: '#about' },
  ];

  return (
    <ul className="links-container">
      {menuLinks.map(({ link, id }) => (
        <li className="sm:mx-4" key={id}>
          <a href={id} onClick={() => toggleMenu()} className="menu-link">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
