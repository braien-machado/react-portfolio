import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Quem Sou</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <section id="presentation">
        <h1>Olá! Eu sou <span>Braien Machado.</span> <span>Desenvolvedor Front-end</span></h1>
      </section>
      <section>
        <ul>
          <h2>Hard Skills</h2>
          <li data-testid="hard-skill">React</li>
        </ul>
        <ul>
          <h2>Soft Skills</h2>
          <li data-testid="soft-skill">Colaboração</li>
        </ul>
        <a href='#cv' id="cv">Veja meu currículo</a>
      </section>
      <section>
        <h2 data-testid="projects-title">Projetos</h2>
      </section>
      <section>
        <h2 data-testid="contact-title">Informações de Contato</h2>
      </section>
      <footer role="contentinfo">
        <span data-testid="footer-text">desenvolvido por Braien Machado.</span>
      </footer>
    </div>
  );
}

export default App;
