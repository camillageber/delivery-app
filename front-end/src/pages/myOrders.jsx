import React from 'react';
import Navigation from '../components/Navigation';
import orderCard from '../components/OrderCard';

function myOrders() {
  return (
    <main>
      <header>
        <Navigation />
      </header>
      <body>
        <orderCard />
      </body>
    </main>
  );
}

export default myOrders;
