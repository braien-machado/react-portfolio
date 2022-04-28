import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Home from './pages/Home';

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
