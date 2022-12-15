import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ id, totalPrice, saleDate, status }) {
  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          {`Pedido ${id}`}
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {saleDate}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {totalPrice}
        </p>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default OrderCard;
