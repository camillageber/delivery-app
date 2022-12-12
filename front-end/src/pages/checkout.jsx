import React, { useContext, useEffect } from 'react';
import DeliveryAddress from '../components/DeliveryAddress';
import Navigation from '../components/Navigation';
import Table from '../components/Table';
import ProductContext from '../context/ProductContext';

function Checkout() {
  const { generateSelectedProducts, selectedProduct,
    generateObjSale,
  } = useContext(ProductContext);

  useEffect(() => { generateSelectedProducts(); generateObjSale(); }, []);

  return (
    <>
      <Navigation />
      <h2>Finalizar Pedido</h2>
      <Table
        itens={ selectedProduct }
      />
      <DeliveryAddress />
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => registerSale() }
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default Checkout;
