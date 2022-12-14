import React from 'react';

function DetailsHeader() {
  return (
    <div className="details-header">
      <h2
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO 0003

      </h2>
      <h2
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        Fulana Pereira
      </h2>
      <h2
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        07/04/2021
      </h2>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Entregue
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como Entregue
      </button>
    </div>
  );
}

export default DetailsHeader;
