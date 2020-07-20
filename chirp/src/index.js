import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AuthProviders from './providers/AuthProviders'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviders>
        <App />
      </AuthProviders>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

