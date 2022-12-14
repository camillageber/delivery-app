import React from 'react';
import PropTypes from 'prop-types';

function TableDetails({ itens }) {
  const total = itens.reduce((prev, curr) => prev
  + parseFloat(curr.productTotalPrice), 0).toFixed(2);

  const generateRow = () => itens.map((item, index) => (
    <tr key={ index }>
      <td
        data-testid={ `customer_details__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_details__element-order-table-name-${index}` }
      >
        {item.name}
      </td>
      <td
        data-testid={
          `customer_details__element-order-table-quantity-${index}`
        }
      >
        {item.quantity}
      </td>
      <td
        data-testid={
          `customer_details__element-order-table-unit-price-${index}`
        }
      >
        {item.price.toString().replace(/\./, ',')}
      </td>
      <td
        data-testid={
          `customer_details__element-order-table-sub-total-${index}`
        }
      >
        {item.productTotalPrice.toString().replace(/\./, ',')}
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
        </thead>
        <tbody>
          {
            generateRow()
          }
        </tbody>
      </table>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        Total: R$
        {' '}
        {total.toString().replace(/\./, ',')}

      </span>
    </div>
  );
}

TableDetails.propTypes = {
  itens: PropTypes.shape(),
};

TableDetails.defaultProps = {
  itens: [],
};

export default TableDetails;
