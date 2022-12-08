import React from 'react';
// import Card from 'react-bootstrap/Card';

function orderCard(orderId, status, date, value) {
  return (
    <div>
      <p>{`Pedido ${orderId}`}</p>
      <p>{ status }</p>
      <div>
        <p>{ date }</p>
        <p>{ value }</p>
      </div>
    </div>
  );
}

export default orderCard;
