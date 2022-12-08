import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import OrderCards from '../components/OrderCards';
import httpRequest from '../axios/config';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    await httpRequest.get('')
      .then(({ data }) => {
        setOrders(data);
      });
  };

  useEffect(() => {
    fetchOrders();
  });

  return (
    <main>
      <header>
        <Navigation />
      </header>
      { orders
      && orders.map(({ orderId, status, date, orderValue }) => (
        <OrderCards
          key={ orderId }
          orderId={ orderId }
          orderStatus={ status }
          orderDate={ date }
          orderValue={ orderValue }
        />
      )) }
    </main>
  );
}

export default MyOrders;
