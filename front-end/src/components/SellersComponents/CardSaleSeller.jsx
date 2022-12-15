import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

function CardSaleSeller({
  id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status }) {
  return (
    <Link to={ `seller/orders/${id}` }>
      <div>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{id}</p>
        <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{status}</p>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>
          {moment(saleDate).format('DD/MM/YYYY')}
        </p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>{totalPrice.replace(/\./, ',')}</p>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </p>
      </div>
    </Link>
  );
}

CardSaleSeller.propTypes = {
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default CardSaleSeller;
