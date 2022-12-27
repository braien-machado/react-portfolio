import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
