import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ cardId, cardName, cardImage, cardPrice /* cardQuantity */ }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div
      data-testid={ `customer_products__element-card-price-${cardId}` }
    >
      <p data-testid={ `customer_products__element-card-title-${cardId}` }>
        {cardName}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${cardId}` }
        src={ cardImage }
        alt={ `Planeta ${cardName}` }
      />
      <p
        data-testid={ `customer_products__element-card-price-${cardId}` }
      >
        {cardPrice}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${cardId}` }
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${cardId}` }
        onClick={ () => (quantity > 0 ? setQuantity(quantity - 1) : null) }
      >
        -
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${cardId}` }
        defaultValue="0"
        value={ quantity }
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
