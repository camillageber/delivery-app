import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import './DetailsHeader.css';

function DetailsHeader() {
  const { orderDetails } = useContext(ProductContext);
  const convertData = () => {
    let date;
    if (orderDetails[0]) {
      date = new Date(orderDetails[0]?.saleDate)
        .toLocaleString('pt-BR').replace('-', '/').split(' ')[0].replace('-', '/');
    }
    return date;
  };
  return (
    <div className="details-header">
      <h4
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${orderDetails[0]?.id}`}

      </h4>
      <h4
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { orderDetails[0] && convertData()}
      </h4>
      <h4
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {`${orderDetails[0]?.status}`}
      </h4>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu para Entrega
      </button>
    </div>
  );
}

export default DetailsHeader;
