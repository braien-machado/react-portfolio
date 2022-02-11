import { render, screen } from '@testing-library/react';
import App from './App';

describe('test presentation', () => {
  it('renders the right content', () => {
    render(<App />);
    const presentationElement = screen.getByText(/Olá/i);
    const content = /Olá! Eu sou Braien Machado. Desenvolvedor Front-end/i;
    expect(presentationElement).toBeInTheDocument();
    expect(presentationElement).toHaveTextContent(content);
  });
})
