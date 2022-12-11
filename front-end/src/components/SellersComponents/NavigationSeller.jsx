import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css';

function NavigationSeller() {
  const [nameDisplay, setName] = useState('Nome da Pessoa Vendedora');
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setName(name);
  }, [nameDisplay]);

  return (
    <nav className="nav-container">
      <section
        data-testid="customer_products__element-navbar-link-orders"
      >
        <a href="/customer/products">Pedidos</a>
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

export default NavigationSeller;
