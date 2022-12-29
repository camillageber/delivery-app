import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/ProductContext';
import './DetailsHeader.css';

function DetailsHeader() {
  const { orderDetails, updateStatus,
    fetchSalesDetailsById, setChangedStatus, changedStatus } = useContext(ProductContext);
  const convertData = () => {
    let date;
    if (orderDetails[0]) {
      date = new Date(orderDetails[0]?.saleDate)
        .toLocaleString('pt-BR').replace('-', '/').split(' ')[0].replace('-', '/');
    }
    return date;
  };

  useEffect(() => orderDetails, [fetchSalesDetailsById, orderDetails]);

  const checkStatusPreparo = () => {
    const value = /Em Trânsito|Entregue|Preparando/.test(orderDetails[0]?.status);
    if (value) return value;
    return false;
  };

  const checkStatusTransito = () => {
    const value = /Em Trânsito|Entregue|Pendente/.test(orderDetails[0]?.status);
    if (value) return value;
    return false;
  };

  return (
    <div className="details-header">
      <h4
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${orderDetails[0]?.id}`}

      </h4>
      <h4
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { orderDetails[0] && convertData()}
      </h4>
      <h4
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {`${orderDetails[0]?.status}`}
      </h4>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ checkStatusPreparo() }
        onClick={ async () => {
          updateStatus(orderDetails[0]?.id, 'Preparando');
          await fetchSalesDetailsById(parseInt(orderDetails[0]?.id, 10));
          setChangedStatus(changedStatus + 1);
        } }
      >
        Preparo
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ checkStatusTransito() }
        onClick={ async () => {
          updateStatus(orderDetails[0]?.id, 'Em Trânsito');
          await fetchSalesDetailsById(parseInt(orderDetails[0]?.id, 10));
          setChangedStatus(changedStatus + 1);
        } }
      >
        Saiu para Entrega
      </button>
    </div>
  );
}

export default DetailsHeader;
