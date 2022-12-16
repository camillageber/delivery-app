import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import SellerDetailsHeader from '../../components/SellerDetailsHeader';
import Navigation from '../../components/Navigation';
import SellerTableDetails from '../../components/SellerTableDetails';

function SellerOrderDetails() {
  const params = useParams();
  const { fetchSalesDetailsById,
    fetchSalesProdDetailsById } = useContext(ProductContext);
  useEffect(() => {
    fetchSalesProdDetailsById(parseInt(params.id, 10));
    fetchSalesDetailsById(parseInt(params.id, 10));
  }, []);
  return (
    <>
      <Navigation />
      <h2>Detalhe do Pedido</h2>
      <SellerDetailsHeader />
      <SellerTableDetails />
    </>
  );
}

export default SellerOrderDetails;
