import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import httpRequest from '../axios/config';
import ProductContext from './ProductContext';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [total, setTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [userAddress, setUserAddress] = useState('');
  const [userAddressNumber, setUserAddressNumber] = useState('');
  const [selectedSeller, setSelectedSeller] = useState(2);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  const fetchOrders = async () => {
    const { token, id } = JSON.parse(localStorage.getItem('user'));
    console.log('token: ', token);
    console.log('id: ', id);
    const { data } = await httpRequest.get(
      '/sales',
      { headers: { Authorization: token } },
    )
      .catch((AxiosError) => console.log(AxiosError.response.data.message));
    setOrders(data);
  };

  const navigate = useNavigate();

  const fetchProducts = async () => {
    // try {
    await httpRequest.get('/products')
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((AxiosError) => console.log(AxiosError));
    // } catch (AxiosError) {
    // console.log(AxiosError);
    // setDisplayError(AxiosError.response.data.message);
  };

  const fetchUserNameById = async (id) => {
    const { data } = await httpRequest.get(`/users/${id}`)
      .catch((AxiosError) => console.log(AxiosError));
    const { name } = data;
    return name;
  };

  const fetchSalesById = async (saleId) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await httpRequest.get(
      `/sales/${saleId}`,
      { headers: { Authorization: token } },
    )
      .then(async ({ data }) => {
        const { sellerId } = data;
        const userName = await fetchUserNameById(sellerId);
        setOrderDetails([data, userName]);
      })
      .catch((AxiosError) => console.log(AxiosError.response.data.message));
    /* setOrderDetails(data); */
  };

  const generateObjSale = () => {
    const getUserStorage = JSON.parse(localStorage.getItem('user'));
    const productList = selectedProduct.map(({ id, quantity }) => ({ id, quantity }));
    const { id } = getUserStorage;
    return {
      userId: id,
      sellerId: +selectedSeller || 2,
      totalPrice: total,
      deliveryAddress: userAddress,
      deliveryNumber: userAddressNumber,
      productList,
    };
  };

  const getSellers = async () => {
    await httpRequest.get('/users/seller')
      .then(({ data }) => setSellers(data));
  };

  const genNewSelectedProductsOBJ = (obj) => {
    const findObj = products.find((product) => product.id === obj.id);
    if (findObj) {
      const { name, price } = findObj;

      return { ...obj, name, price };
    }
  };

  const generateSelectedProducts = () => {
    const selectedProducts = JSON.parse(localStorage.getItem('productCar'));
    const newSelectedProducts = selectedProducts.map((selected) => {
      const newProduct = genNewSelectedProductsOBJ((selected));
      return newProduct;
    });
    setSelectedProduct(newSelectedProducts);
  };

  const createSale = async (event) => {
    event.preventDefault();
    const newSale = generateObjSale();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const { data } = await httpRequest.post(
      '/sales',
      newSale,
      { headers: { authorization: token } },
    )
      .catch((AxiosError) => console.log(AxiosError.response.data.message));
    navigate(`/customer/orders/${data.saleId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteSelectProduct = ({ target }) => {
    const { id } = target;
    const newSelectedProducts = selectedProduct.filter((sel) => sel.name !== id);
    setSelectedProduct(newSelectedProducts);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    const findUndefined = selectedProduct.some((e) => typeof e === 'undefined');
    if (!findUndefined) {
      totalPrice = selectedProduct.reduce((prev, curr) => prev
  + parseFloat(curr.productTotalPrice), 0).toFixed(2);
      setTotalPrice(totalPrice);
    }
  };

  const valuesContext = {
    products,
    generateSelectedProducts,
    selectedProduct,
    deleteSelectProduct,
    generateObjSale,
    sellers,
    setUserAddress,
    setUserAddressNumber,
    setSelectedSeller,
    total,
    calculateTotalPrice,
    getSellers,
    createSale,
    orders,
    fetchOrders,
    setOrders,
    fetchSalesById,
    orderDetails,
  };

  return (
    <ProductContext.Provider value={ useMemo(() => (valuesContext)) }>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
