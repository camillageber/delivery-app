import React from 'react';
import DetailsHeader from '../components/DetailsHeader';
import Navigation from '../components/Navigation';
import TableDetails from '../components/TableDetails';

function OrderDetails() {
  return (
    <>
      <Navigation />
      <h2>Detalhe do Pedido</h2>
      <DetailsHeader />
      <TableDetails />
    </>
  );
}

export default OrderDetails;
