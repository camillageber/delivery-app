import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import './DetailsHeader.css';

function DetailsHeader() {
  const { fetchSalesById, orderDetails } = useContext(ProductContext);
  const params = useParams();
  useEffect(() => {
    fetchSalesById(parseInt(params.id, 10));
  }, []);
  console.log(orderDetails[0]);
  const header = () => (
    <div className="details-header">
      <h4
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${orderDetails[0].id}`}

      </h4>

      <h4
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`${orderDetails[1]}`}
      </h4>
      <h4
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {`${orderDetails[0].saleDate}`}
      </h4>
      <h4
        data-testid="customer_order_details__element
            -order-details-label-delivery-status"
      >
        {`${orderDetails[0].status}`}
      </h4>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como Entregue
      </button>
    </div>
  );

  return (
    <div>
      {
        orderDetails ? header() : null
      }
    </div>
  );
}

export default DetailsHeader;
