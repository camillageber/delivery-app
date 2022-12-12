import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import ProductContext from './ProductContext';
import httpRequest from '../axios/config';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [total, setTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [userAddress, setUserAddress] = useState('');
  const [userAddressNumber, setUserAddressNumber] = useState('');
  const [selectedSeller, setSelectedSeller] = useState('2');

  const navigate = useNavigate();

  const fetchProducts = async () => {
    // try {
    await httpRequest.get('/products')
      .then(({ data }) => {
        setProducts(data);
      });
    // } catch (AxiosError) {
    // console.log(AxiosError);
    // setDisplayError(AxiosError.response.data.message);
  };

  const generateObjSale = () => {
    const getUserStorage = JSON.parse(localStorage.getItem('user'));
    const productList = selectedProduct.map(({ id, quantity }) => ({ id, quantity }));
    const { id } = getUserStorage;
    return {
      userId: id,
      sellerId: selectedSeller,
      totalPrice: total,
      deliveryAddress: userAddress,
      deliveryNumber: userAddressNumber,
      productList,
    };
  };

  const createSale = async () => {
    const newSale = generateObjSale();
    await httpRequest.post('/sales', newSale)
      .then(({ data }) => navigate(`/customer/orders/${data.saleId}`))
      .catch((AxiosError) => console.log(AxiosError.response.data.message));
  };

  const getSellers = async () => {
    await httpRequest.get('/sales/sellers')
      .then(({ data }) => setSellers(data));
  };

  useEffect(() => {
    fetchProducts();
    getSellers();
  }, []);

  const genNewSelectedProductsOBJ = (obj) => {
    const findObj = products.find((product) => product.id === obj.id);
    const { name, price } = findObj;

    return { ...obj, name, price };
  };

  const generateSelectedProducts = () => {
    const selectedProducts = JSON.parse(localStorage.getItem('productCar'));
    let newSelectedProducts = [];
    if (selectedProducts) {
      newSelectedProducts = selectedProducts.map((selected) => {
        const newProduct = genNewSelectedProductsOBJ((selected));
        return newProduct;
      });
    }
    return setSelectedProduct(newSelectedProducts);
  };

  const deleteSelectProduct = ({ target }) => {
    const { id } = target;
    const newSelectedProducts = selectedProduct.filter((sel) => sel.name !== id);
    setSelectedProduct(newSelectedProducts);
  };

  const calculateTotalPrice = () => {
    const totalPrice = selectedProduct.reduce((prev, curr) => prev
  + parseFloat(curr.productTotalPrice), 0).toFixed(2);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    if (products.length > 0) generateSelectedProducts();
  }, [products]);

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
    createSale,
  };

  return (
    <ProductContext.Provider value={ useMemo(() => (valuesContext)) }>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
