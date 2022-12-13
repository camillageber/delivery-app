import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ProductContext from '../context/ProductContext';
import './products.css';

function Products() {
  const [total, setTotal] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const { products, calculateTotalPrice,
    generateSelectedProducts } = useContext(ProductContext);

  const totalProducts = () => {
    let calculateTotal = 0;
    const cart = JSON.parse(localStorage.getItem('productCar'));
    if (cart) {
      calculateTotal = (cart.reduce((prev, curr) => prev
      + parseFloat(curr.productTotalPrice), 0)).toFixed(2);
      setTotal(calculateTotal);
    }
  };

  useEffect(() => {
    totalProducts();
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  useEffect(() => {
    if (parseInt(total, 10) === 0) setDisabledButton(true);
    if (parseInt(total, 10) !== 0) setDisabledButton(false);
  }, [total]);

  const navigate = useNavigate();

  const handleClick = () => {
    generateSelectedProducts();
    navigate('/customer/checkout');
  };

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
        type="submit"
        data-testid="customer_products__button-cart"
        onClick={ () => handleClick() }
        disabled={ disabledButton }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          { `${total.toString().replace(/\./, ',')}` }
        </span>

      </button>
    </main>
  );
}

export default Products;
