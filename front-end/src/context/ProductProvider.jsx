import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './ProductContext';
import httpRequest from '../axios/config';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetchProducts();
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
    return newSelectedProducts;
  };

  useEffect(() => {
    if (products.length > 0) generateSelectedProducts();
  }, [products]);

  const valuesContext = {
    products,
    generateSelectedProducts,
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
