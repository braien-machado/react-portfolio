import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('test header', () => {
  render(<App />);

  const navElement = screen.getByRole('navigation');

  it('has a navbar', () => {
    expect(navElement).toBeInTheDocument();
  });

  it('has all the links', () => {
    const { getByRole } = within(navElement);
    const list = getByRole('list');
    const { getAllByRole } = within(list);
    const listItems = getAllByRole('listitem');

    expect(listItems).toHaveLength(4);

    const linksText = ['Quem Sou', 'Habilidades', 'Projetos', 'Contato'];

    listItems.forEach((link, index) => {
      expect(link).toHaveTextContent(linksText[index]);
    });
  })
})

describe('test presentation', () => {
  it('renders the right content', () => {
    render(<App />);
    const presentationElement = screen.getByText(/Olá/i);
    const content = /Olá! Eu sou Braien Machado. Desenvolvedor Front-end/i;
    expect(presentationElement).toBeInTheDocument();
    expect(presentationElement).toHaveTextContent(content);
  });
})
