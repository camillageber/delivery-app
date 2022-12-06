import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { cardId, cardName, cardImage, cardPrice /* cardQuantity */ } = this.props;
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
        >
          +
        </button>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${cardId}` }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${cardId}` }
          placeholder="0"
        />
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  cardId: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardPrice: PropTypes.string.isRequired,
  /*  cardQuantity: PropTypes.string.isRequired, */
};
