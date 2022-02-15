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
        <h2>Hard Skills</h2>
        <h2>Soft Skills</h2>
        <a href='#'>Veja meu currículo</a>
      </section>
    </div>
  );
}

export default App;
