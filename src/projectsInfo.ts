export interface projectProps {
  name: string;
  description: string;
  image: string;
  demo: string;
  repository: string;
  stacks?: string[];
}

const projectsInfo: projectProps[] = [
  {
    name: 'Event Platform',
    description:
      'Plataforma de eventos na qual o usuário se cadastra na' +
      ' página inicial e tem acesso a todo o conteúdo disponível.',
    image: 'event-platform.webp',
    demo: 'https://meetmyplaylist.vercel.app/',
    repository: 'https://github.com/braien-machado/event-platform',
    stacks: ['Vite', 'React', 'Tailwind Css', 'Html', 'GraphQL', 'GraphCMS'],
  },
  {
    name: 'Where in the world?',
    description:
      'A aplicação disponibiliza cards com informações básicas de diversos países, com opções de' +
      ' filtragem por nome e/ou região. Além disso, há a possibilidade de alterar entre modo' +
      ' escuro e claro. O usuário pode clicar em um card para ser redirecionado para uma tela com' +
      ' mais informações, como a moeda local. Da página de detalhes, também é possível acessar' +
      ' mais detalhes de qualquer país que faz fronteira com o selecionado, além de poder voltar' +
      ' à página inicial.',
    image: 'desktop-filter-dark.webp',
    demo: 'https://countries-bmp.vercel.app/',
    repository:
      'https://github.com/braien-machado/rest-countries-api-with-color-theme-switcher',
    stacks: ['React', 'Sass', 'Airbnb style', 'Rest API consumption'],
  },
  {
    name: 'React Portfolio',
    description:
      'Portfolio feito em React para exposição de projetos, informações de contato e um pouco' +
      ' sobre mim.',
    image: 'portfolio-react.webp',
    demo: 'https://braien-machado.vercel.app/',
    repository: 'https://github.com/braien-machado/react-portfolio',
    stacks: ['React', 'Tailwind Css', 'Html'],
  },
];

export default projectsInfo;
