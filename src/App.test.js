import { render, screen } from '@testing-library/react';
import App from './App';

describe('test header', () => {
  render(<App />);

  it('has a navbar', () => {
    const navElement = screen.getByRole('nav');
    expect(navElement).toBeInTheDocument();
  });
  it('has all the links', () => {
    const navLinks = screen.getByRole('nav').innerHTML;

    expect(navLinks).toHaveLength(4);

    const linksText = ['Quem sou', 'Habilidades', 'Projetos', 'Contato'];

    navLinks.forEach((link, index) => {
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
