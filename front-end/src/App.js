import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/register';
import Checkout from './pages/checkout';
import SellerOrders from './pages/sellers/SellerOrders';
import ProductProvider from './context/ProductProvider';
import OrderDetails from './pages/order_details';
import MyOrders from './pages/myOrders';

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/customer/products" element={<Products />} />
        <Route exact path="/customer/checkout" element={<Checkout />} />
        <Route exact path="/customer/orders" element={<MyOrders />} />
        <Route exact path="/customer/orders/:id" element={<OrderDetails />} />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      </Routes>
    </ProductProvider>
  );
}

export default App;
