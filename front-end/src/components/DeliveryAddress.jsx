import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

function DeliveryAddress() {
  const order = [];
  const { sellers, setUserAddress,
    setUserAddressNumber, setSelectedSeller } = useContext(ProductContext);
  const orderOptions = sellers;

  const handleChangeOptions = ({ target }) => {
    const { name, value } = target;
    setSelectedSeller(() => ({
      [name]: value,
    }));
  };

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
          onChange={ handleChangeOptions }
        >
          {
            orderOptions.map((option, index) => (
              <option key={ index } value={ option.name } id={ option.id }>
                {option.name}
              </option>))
          }

        </select>
      </label>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
        onChange={ ({ target }) => setUserAddress(target.value) }
      />
      <input
        type="text"
        data-testid="customer_checkout__input-address-number"
        onChange={ ({ target }) => setUserAddressNumber(target.value) }
      />
    </div>
  );
}

export default DeliveryAddress;
