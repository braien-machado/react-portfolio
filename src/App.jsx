import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Home from './components/Home';

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

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
