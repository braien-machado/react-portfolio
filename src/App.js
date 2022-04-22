import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
