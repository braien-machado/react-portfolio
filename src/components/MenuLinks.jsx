import './MenuLinks.css';

export default function MenuLinks({ toggleMenu }) {
  const menuLinks = [
    { link: 'Início', id: '#home' },
    { link: 'Habilidades', id: '#skills' },
    { link: 'Projetos', id: '#projects' },
    { link: 'Sobre mim', id: '#about' },
  ];

  const generateMenuLink = ({ link, id }) => (
    <a
      className="sm:mx-4"
      href={id}
      key={link}
      to={id}
      onClick={() => {
        toggleMenu();
      }}
    >
      <li className="menu-link">
        {link}
      </li>
    </a>
  );

  return (
    <ul className="links-container">
      {menuLinks.map((link) => generateMenuLink(link))}
    </ul>
  );
}
