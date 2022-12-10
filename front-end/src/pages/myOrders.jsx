import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import OrderCards from '../components/OrderCards';
import httpRequest from '../axios/config';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    await httpRequest.get('/sales', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
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
      {orders
        && orders.map(({ id, status, saleDate, totalPrice }) => (
          <Link
            key={id}
            to={`/orders/${id}`}
          >
            <OrderCards
              key={id}
              orderId={id}
              orderStatus={status}
              orderDate={saleDate}
              orderValue={totalPrice}
            />
          </Link>
        ))}
    </main>
  );
}

export default MyOrders;
