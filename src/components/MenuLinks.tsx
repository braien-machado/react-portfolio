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

  const generateMenuLink = ({ link, id }: menuLinkProps) => (
    <a
      className="sm:mx-4"
      href={id}
      key={id}
      onClick={() => {
        toggleMenu();
      }}
    >
      <li className="menu-link">{link}</li>
    </a>
  );

  return (
    <ul className="links-container">
      {menuLinks.map((link) => generateMenuLink(link))}
    </ul>
  );
}
