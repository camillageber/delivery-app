import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import httpRequest from '../axios/config';
import './products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);

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

  const totalProducts = () => {
    let calculateTotal = 0;
    const cart = JSON.parse(localStorage.getItem('productCar'));
    if (cart) {
      calculateTotal = (cart.reduce((prev, curr) => prev + curr.productTotalPrice, 0))
        .toFixed(2);
      setTotal(calculateTotal);
    }
  };

  useEffect(() => {
    fetchProducts();
    totalProducts();
  }, []);

  useEffect(() => {
    console.log(total);
    if (parseInt(total, 10) === 0) setDisabledButton(true);
    if (parseInt(total, 10) !== 0) setDisabledButton(false);
  }, [total]);

  const navigate = useNavigate();

  return (
    <main>
      <Navigation
        data-testid="customer_products__element-navbar-link-products"
      />
      <section className="products-cards-render-section">
        { products
        && products.map(({ id, name, urlImage, price }, index) => (
          <ProductCard
            key={ index }
            cardId={ id }
            cardName={ name }
            cardImage={ urlImage }
            cardPrice={ price }
            updateCart={ () => totalProducts() }
          />
        ))}
      </section>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ disabledButton }
      >
        { `${total.toString().replace(/\./, ',')}` }
      </button>
    </main>
  );
}

export default Products;
