import React from 'react';
import './index.css';
import App from './App';
import MovieAppProvider from './context/MovieContext';
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieAppProvider>
      <App />
    </MovieAppProvider>,
  </React.StrictMode>
);