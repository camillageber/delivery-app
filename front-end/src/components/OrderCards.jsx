import React from 'react';
import Card from 'react-bootstrap/Card';

function orderCard(orderId, status, date, value) {
  return (
    <Card>
      <Card.Title>{`Pedido ${orderId}`}</Card.Title>
      <Card.Subtitle>{ status }</Card.Subtitle>
      <div>
        <p>{ date }</p>
        <p>{ value }</p>
      </div>
    </Card>
  );
}

export default orderCard;
