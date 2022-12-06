import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
