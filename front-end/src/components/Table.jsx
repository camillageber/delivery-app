import React from 'react';
import PropTypes from 'prop-types';

function Table({ itens }) {
  const generateRow = () => itens.map((item, index) => (
    <tr key={ index }>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index + 1}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-item-name-${index + 1}` }
      >
        {item.quantity}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-item-quantity-${index + 1}`
        }
      >
        {item.productTotalPrice}
      </td>
      <td>
        <button
          type="submit"
          data-testid="delete-btn"
          id={ expense.id }
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
