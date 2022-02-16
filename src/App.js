import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>

      {/* <div className="App">
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
      </div> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
