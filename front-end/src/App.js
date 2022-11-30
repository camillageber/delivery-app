import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
