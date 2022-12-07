import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ cardId, cardName, cardImage, cardPrice /* cardQuantity */ }) {
  const [quantity, setQuantity] = useState();
  const [productTotalPrice, setProductTotalPrice] = useState(0);

  const checkquantityonLC = () => {
    const productCard = JSON.parse(localStorage.getItem('productCar'));
    if (!productCard) return setQuantity(0);
    const productExists = productCard.find((item) => item.id === cardId);
    if (productExists) return setQuantity(productExists.quantity);
    return setQuantity(0);
  };

  const sendToCard = (product) => {
    // acessa o local storage e pega o array de produtos caso exista, senao retorna um array vazio
    const productCard = JSON.parse(localStorage.getItem('productCar'));
    if (!productCard) {
      return localStorage.setItem('productCar', JSON.stringify([product]));
    }
    const productExists = productCard.find((item) => item.id === product.id);
    // se o produto ja existir no carrinho, atualiza a quantidade e o preco total do produto
    if (productExists) {
      const newProductCard = productCard.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity, productTotalPrice: product.productTotalPrice };
        }
        return item;
      });
      // fim do map e inicio do setItem
      localStorage.setItem('productCar', JSON.stringify(newProductCard));
      // se o produto nao existir no carrinho, adiciona o produto no carrinho
    }

    // localstorage exite, porem sem o produto em questao
    if (productCard && !productExists) {
      localStorage.setItem('productCar', JSON.stringify([...productCard, product]));
    }
  };

  const removeFromCard = (id) => {
    // acessa o local storage e pega o array de produtos caso exista, senao retorna um array vazio
    const productCard = JSON.parse(localStorage.getItem('productCar'));
    if (!productCard) return null;
    const newProductCard = productCard.filter((item) => item.id !== id);
    return localStorage.setItem('productCar', JSON.stringify(newProductCard));
  };

  const createProduct = () => {
    const product = {
      id: cardId,
      quantity,
      productTotalPrice,
    };
    if (quantity > 0) {
      sendToCard(product);
    }
  };

  const cardPriceNumber = Number(cardPrice);

  useEffect(() => {
    checkquantityonLC();
  }, []);

  useEffect(() => {
    setProductTotalPrice(() => (quantity * cardPriceNumber));
    // productTotalPrice ===0 && removeFromCard(product);
    createProduct();
  }, [quantity, productTotalPrice]);

  useEffect(() => {
    if (quantity === 0) removeFromCard(cardId);
  }, [productTotalPrice]);

  return (
    <div
      data-testid={`customer_products__element-card-price-${cardId}`}
    >
      <p data-testid={`customer_products__element-card-title-${cardId}`}>
        {cardName}
      </p>
      <img
        data-testid={`customer_products__img-card-bg-image-${cardId}`}
        src={cardImage}
        alt={`Planeta ${cardName}`}
      />
      <p
        data-testid={`customer_products__element-card-price-${cardId}`}
      >
        {cardPrice.replace(/\./, ',')}
      </p>
      <button
        type="button"
        data-testid={`customer_products__button-card-add-item-${cardId}`}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
      <button
        type="button"
        data-testid={`customer_products__button-card-rm-item-${cardId}`}
        onClick={() => (quantity > 0 && setQuantity(quantity - 1))}
      >
        -
      </button>
      <input
        type="text"
        data-testid={`customer_products__input-card-quantity-${cardId}`}
        value={quantity}
        onChange={({ target }) => (target
          .value >= 0 && setQuantity(Number(target.value)))}
      />
    </div>
  );
}

ProductCard.propTypes = {
  cardId: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardPrice: PropTypes.string.isRequired,
  /*  cardQuantity: PropTypes.string.isRequired, */
};

export default ProductCard;
