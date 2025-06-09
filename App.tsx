// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Bazar from './pages/Bazar';
import Forum from './pages/Forum';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* dá um padding-top para o conteúdo não ficar atrás do header */}
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bazar" element={<Bazar />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
