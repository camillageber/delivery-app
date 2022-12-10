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

  useEffect(() => { fetchProducts(); }, []);

  const valuesContext = {
    products,
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
