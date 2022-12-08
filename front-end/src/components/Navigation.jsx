import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// import NavComponents from './NavComponents';

function Navigation() {
  const [nameDisplay, setName] = useState('Nome do usuário');
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setName(name);
  }, [nameDisplay]);

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
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
      >
        Sair
      </Link>
    </nav>
  );
}

export default Navigation;
