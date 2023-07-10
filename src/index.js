import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter заменен на HashRouter для корректной работы на github pages
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.body.style = 'background-color: rgba(32, 32, 32, 1)';