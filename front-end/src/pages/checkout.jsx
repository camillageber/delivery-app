import React, { useContext } from 'react';
import DeliveryAddress from '../components/DeliveryAddress';
import Navigation from '../components/Navigation';
import Table from '../components/Table';
import ProductContext from '../context/ProductContext';

function Checkout() {
  const { generateSelectedProducts } = useContext(ProductContext);
  const selectedProducts = generateSelectedProducts();
  return (
    <>
      <Navigation />
      <h2>Finalizar Pedido</h2>
      <Table
        itens={ selectedProducts }
      />
      <DeliveryAddress />
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default Checkout;
