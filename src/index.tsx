import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import reportWebVitals from './reportWebVitals';
import 'styles/animate.css';
import 'styles/locomotive.css';
import 'styles/progress.css';
import 'react-toastify/dist/ReactToastify.css';
import { FixedGlobalStyle } from 'reducers';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <FixedGlobalStyle />
    <App />
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
