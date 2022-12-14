//import React, { useEffect, useState } from 'react';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import OrderCards from '../components/OrderCards';
import ProductContext from '../context/ProductContext';
//import httpRequest from '../axios/config';

function MyOrders() {
  const { orders, fetchOrders } = useContext(ProductContext);
  // const [orders, setOrders] = useState([]);

  // const fetchOrders = async () => {
  //   const { token } = JSON.parse(localStorage.getItem('user'));
  //   await httpRequest.get('/sales', {
  //     headers: { authorization: token },
  //   })
  //     .then(({ data }) => {
  //       setOrders(data);
  //     }).catch((AxiosError) => console.log(AxiosError));
  // };

  useEffect(() => {
    fetchOrders();
  });

  return (
    <main>
      <header>
        <Navigation />
      </header>
      <section className="products-cards-render-section">
        {orders
          && orders.map(({ id, status, saleDate, totalPrice }, index) => (
            <Link
              key={index}
              to={`/customer/orders/${id}`}
            >
              <OrderCards
                key={index}
                orderId={id}
                orderStatus={status}
                orderDate={saleDate}
                orderValue={totalPrice}
              />
            </Link>
          ))}
      </section>
    </main>
  );
}

export default MyOrders;
