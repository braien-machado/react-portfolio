import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';

// Initialize React Ga with your tracking ID
ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
