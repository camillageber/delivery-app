import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import httpRequest from '../axios/config';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await httpRequest.get('/products')
          .then(({ data }) => {
            console.log(data);
            setProducts(data);
          });
      } catch (AxiosError) {
        console.log(AxiosError);
        setDisplayError(AxiosError.response.data.message);
      }
    };
    fetchProducts();
  }, []);

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
          />
        ))}
      </section>
    </main>
  );
}

export default Products;
