import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Search from './pages/Search';
import './styles/index.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
