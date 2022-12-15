import React, { useState, useEffect } from 'react';
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
      <input
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
        value="Pedidos"
        onClick={ () => navigate('/customer/products') }
      />
      <input
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
        value={ nameDisplay }
        onClick={ () => navigate('/seller/orders') }

      />

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
