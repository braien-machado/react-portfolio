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
    const presentationText = screen.getByText(/Olá/i);
    const content = /Olá! Eu sou Braien Machado. Desenvolvedor Front-end/i;
    expect(presentationText).toBeInTheDocument();
    expect(presentationText).toHaveTextContent(content);
  });
});

describe('test skills and Curriculum vitæ', () => {
  describe('hard skills are correct', () => {
    it("has 'Hard Skills' title", () => {
      render(<App />);
      const hardSkillsTitle = screen.getByText('Hard Skills');
      
      expect(hardSkillsTitle).toBeInTheDocument();
    });

    it("has at least one hard skill", () => {
      render(<App />);
      const hardSkills = screen.queryAllByTestId('hard-skill');
      
      expect(hardSkills.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('soft skills are correct', () => {
    it("has 'Soft Skills' title", () => {
      render(<App />);
      const softSkillsTitle = screen.getByText(/Soft Skills/i);
      
      expect(softSkillsTitle).toBeInTheDocument();
    });

    it("has at least one soft skill", () => {
      render(<App />);
      const softSkills = screen.queryAllByTestId('soft-skill');
      
      expect(softSkills.length).toBeGreaterThanOrEqual(1);
    });
  })

  it('has Curriculum vitæ link', () => {
    render(<App />);
    const cvLink = screen.getByText(/veja meu currículo/i);

    expect(cvLink).toBeInTheDocument();
  });
});
