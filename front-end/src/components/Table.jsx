import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/ProductContext';

function Table() {
  const { selectedProduct,
    deleteSelectProduct, total, calculateTotalPrice } = useContext(ProductContext);

  useEffect(() => calculateTotalPrice(), [calculateTotalPrice, total]);

  const generateRow = () => selectedProduct.map((item, index) => (
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
        {item.price.toString().replace(/\./, ',')}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
      >
        {item.productTotalPrice.toString().replace(/\./, ',')}
      </td>
      <td>
        <button
          type="submit"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          id={ item.name }
          onClick={ (e) => deleteSelectProduct(e) }
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
          <tr>
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
          </tr>
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
        Total: R$
        {' '}
        {total.toString().replace(/\./, ',')}

      </span>
    </div>
  );
}

export default Table;
