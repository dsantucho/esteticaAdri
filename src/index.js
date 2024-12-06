import React from 'react';
import ReactDOM from 'react-dom/client';
//Styling
import './index.css';
import './styles.scss';
//components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
