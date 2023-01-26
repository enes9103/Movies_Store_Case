import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieAppProvider from './context/MovieContext';

ReactDOM.render(
    <MovieAppProvider>
      <App />
    </MovieAppProvider>,
  document.getElementById('root')
);