import React from 'react';
// import Card from 'react-bootstrap/Card';

function orderCard(orderId, status, date, value) {
  return (
    <div>
      <p
        data-testid={ `customer_orders__element-order-id-${orderId}` }
      >
        {`Pedido ${orderId}`}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${orderId}` }
      >
        { status }
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${orderId}` }
      >
        { date }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${orderId}` }
      >
        { value }
      </p>
    </div>
  );
}

export default orderCard;
