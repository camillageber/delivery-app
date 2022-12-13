import React, { useContext, useEffect } from 'react';
import DeliveryAddress from '../components/DeliveryAddress';
import Navigation from '../components/Navigation';
import Table from '../components/Table';
import ProductContext from '../context/ProductContext';

function Checkout() {
  const { generateObjSale, getSellers,
    createSale,
  } = useContext(ProductContext);

  useEffect(() => {
    generateObjSale(); getSellers();
  }, []);

  return (
    <>
      <Navigation />
      <h2>Finalizar Pedido</h2>
      <Table />
      <DeliveryAddress />
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        onClick={ createSale }
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default Checkout;
