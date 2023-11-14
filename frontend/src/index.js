import React from 'react';
import { createRoot } from 'react-dom';

import './style.css'; // Importa el archivo de estilos global

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
