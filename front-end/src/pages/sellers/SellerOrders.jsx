import { useState, useEffect } from 'react';
import CardSaleSeller from '../../components/SellersComponents/CardSaleSeller';
import NavigationSeller from '../../components/SellersComponents/NavigationSeller';
import httpRequest from '../../axios/config';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const data = await httpRequest.get('/sales');
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <header>
        <NavigationSeller />
      </header>

      <main>
        { orders.map((order) => (<CardSaleSeller
          key={ order.id }
          { ...order }
        />))}
        <p>Olá mundo</p>
      </main>

    </div>
  );
}

export default SellerOrders;
