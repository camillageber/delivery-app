import { useState, useEffect } from 'react';
import CardSaleSeller from '../../components/SellersComponents/CardSaleSeller';
import NavigationSeller from '../../components/SellersComponents/NavigationSeller';
import httpRequest from '../../axios/config';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { token, id } = JSON.parse(localStorage.getItem('user'));
    console.log('token: ', token);
    console.log('id: ', id);
    const { data } = await httpRequest.get(
      '/sales',
      { id },
      { headers: { authorization: token } },
    )
      .catch((AxiosError) => console.log(AxiosError.response.data.message));
    setOrders(data);
  };

  // const getOrder = async () => {
  //   const { data } = await httpRequest.get(
  //     '/sales',
  //     { id },
  //     { headers: { authorization: token } },
  //   );
  //   return data;
  // };

  // const fetchOrders = async () => {
  //   const { token, id } = JSON.parse(localStorage.getItem('user'));
  //   console.log('token: ', token);
  //   console.log('id: ', id);
  //   const data = getOrder();
  //   console.log('data :', data);
  //   setOrders(data);
  // };

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
