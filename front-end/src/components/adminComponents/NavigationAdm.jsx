import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationAdm() {
  const [nameDisplay, setName] = useState('Nome da Pessoa Administradora');
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setName(name);
  }, [nameDisplay]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="nav-container">
      <input
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
        value="GERENCIAR USUÁRIOS"
      />
      <input
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
        value={ nameDisplay }
      />
      <input
        data-testid="customer_products__element-navbar-link-logout"
        id="logout"
        type="button"
        value="sair"
        onClick={ logout }
      />
    </nav>
  );
}

export default NavigationAdm;
