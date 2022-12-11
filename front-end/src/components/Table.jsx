import React from 'react';
import PropTypes from 'prop-types';

function Table({ itens }) {
  const generateRow = () => itens.map((item, index) => (
    <tr key={ index }>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {item.name}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
      >
        {item.quantity}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-unit-price-${index}`
        }
      >
        {item.price}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
      >
        {item.productTotalPrice}
      </td>
      <td>
        <button
          type="submit"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ (e) => deleteRow(e) }
        >
          Remover

        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table border="1">
        <thead>
          <th>
            Item
          </th>
          <th>
            Descrição
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Valor Unitário
          </th>
          <th>
            Sub-total
          </th>
          <th>
            Remover Item
          </th>
        </thead>
        <tbody>
          {
            generateRow()
          }
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$ 28,46

      </span>
    </div>
  );
}

Table.propTypes = {
  itens: PropTypes.shape(),
};

Table.defaultProps = {
  itens: [],
};

export default Table;
