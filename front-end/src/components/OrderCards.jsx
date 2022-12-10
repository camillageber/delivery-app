import React from 'react';
// import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function OrderCard(orderId, orderStatus, orderDate, orderValue) {
  return (
    <div>
      <p
        data-testid={`customer_orders__element-order-id-${orderId}`}
      >
        {`Pedido ${orderId}`}
      </p>
      <p
        data-testid={`customer_orders__element-delivery-status-${orderId}`}
      >
        {orderStatus}
      </p>
      <p
        data-testid={`customer_orders__element-order-date-${orderId}`}
      >
        {orderDate}
      </p>
      <p
        data-testid={`customer_orders__element-card-price-${orderId}`}
      >
        {orderValue}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  orderId: PropTypes.number,
  orderStatus: PropTypes.string,
  orderDate: PropTypes.string,
  orderValue: PropTypes.string,
}.isRequired;

export default OrderCard;
