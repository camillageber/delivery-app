import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Navigation.css';

function NavigationSeller() {
  const [nameDisplay, setName] = useState('Nome da Pessoa Vendedora');
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
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
        onClick={ () => navigate('/customer/products') }
      >
        <p>Pedidos</p>
      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
        onClick={ () => navigate('/customer/') }
      >
        <p>{nameDisplay}</p>
      </button>

      <input
        data-testid="customer_products__element-navbar-link-logout"
        id="logout"
        type="button"
        value="Sair"
        onClick={ logout }
      />

    </nav>
  );
}

export default NavigationSeller;
