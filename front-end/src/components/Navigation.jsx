import React from 'react';
// import NavComponents from './NavComponents';

function Navigation() {
  return (
    <nav>
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
        <a href="/customer/">Nome do usuário</a>
      </section>
      <section
        data-testid="customer_products__element-navbar-link-logout"
      >
        <a href="/customer/logout">Sair</a>
      </section>
    </nav>
  );
}

export default Navigation;
