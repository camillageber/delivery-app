import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

function SellerTableDetails() {
  const { orderSellerDetails, orderDetails } = useContext(ProductContext);

  const calculateSubTotal = (item) => {
    if (!item) return 0;
    const subTotal = item.quantity * Number(item.price);
    return subTotal;
  };

  console.log(orderDetails);
  const generateRow = () => orderSellerDetails.map((item, index) => (
    <tr key={ index }>
      <td
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        {item?.name}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-quantity-${index}`
        }
      >
        {item?.quantity}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-unit-price-${index}`
        }
      >
        {item?.price.toString().replace(/\./, ',')}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-sub-total-${index}`
        }
      >
        { calculateSubTotal(item)}
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
        data-testid="seller_order_details__element-order-total-price"
      >
        Total: R$
        {' '}
        {orderDetails[0]?.totalPrice?.toString().replace(/\./, ',')}

      </span>
    </div>
  );
}

export default SellerTableDetails;
