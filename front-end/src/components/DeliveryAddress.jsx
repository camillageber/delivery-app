import React from 'react';

function DeliveryAddress() {
  const order = [];
  const orderOptions = [];

  return (
    <div className="delivery-address-container">
      <h2>Detalhes e Endereço para Entrega</h2>
      <label htmlFor="customer_checkout__select-seller">
        P. Vendedora Responsável:
        <select
          data-testid="customer_checkout__select-seller"
          name="column"
          id="customer_checkout__select-seller"
          value={ order.column }
        >
          {
            orderOptions.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>))
          }

        </select>
      </label>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
      />
      <input
        type="text"
        data-testid="customer_checkout__input-address-number"
      />
    </div>
  );
}

export default DeliveryAddress;
