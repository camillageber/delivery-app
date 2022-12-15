import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import DetailsHeader from '../components/DetailsHeader';
import Navigation from '../components/Navigation';
import TableDetails from '../components/TableDetails';

function OrderDetails() {
  const params = useParams();
  const { fetchSalesDetailsById, orderDetails } = useContext(ProductContext);
  useEffect(() => {
    fetchSalesDetailsById(parseInt(params.id, 10));
    console.log(orderDetails);
  }, []);
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
