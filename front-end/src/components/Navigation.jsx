import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';
// import NavComponents from './NavComponents';

function Navigation() {
  const [nameDisplay, setName] = useState('Nome do usuário');
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setName(name);
  }, [nameDisplay]);

  const navigate = useNavigate();

  const logOut = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <nav className="nav-container">
      <section
        data-testid="customer_products__element-navbar-link-products"
      >
        <a href="/customer/products">Produtos</a>
      </section>
      <section
        data-testid="customer_products__element-navbar-link-orders"
      >
        <a href="/customer/orders">Meus Pedidos</a>
      </section>
      <section
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <a href="/customer/">{nameDisplay}</a>
      </section>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logOut }
      >
        Sair
      </button>

    </nav>
  );
}

export default Navigation;
