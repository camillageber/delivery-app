import React, { useEffect, useContext } from 'react';
import Navigation from '../components/Navigation';
import OrderCards from '../components/OrderCards';
import ProductContext from '../context/ProductContext';

function MyOrders() {
  const { orders, fetchOrders } = useContext(ProductContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main>
      <header>
        <Navigation />
      </header>
      <section className="products-cards-render-section">
        {orders.map((order) => (
          <OrderCards
            key={ order.id }
            { ...order }
          />
        ))}
      </section>
    </main>
  );
}

export default MyOrders;
