import { useState, useEffect } from 'react';
import CardSaleSeller from '../../components/SellersComponents/CardSaleSeller';
import NavigationSeller from '../../components/SellersComponents/NavigationSeller';
import httpRequest from '../../axios/config';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const allOrders = await httpRequest.get('/sales');
    setOrders(allOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <NavigationSeller />
      <main>
        { orders.map((order) => <CardSaleSeller key={ order.id } { ...order } />)}
      </main>
    </div>
  );
}

export default SellerOrders;
