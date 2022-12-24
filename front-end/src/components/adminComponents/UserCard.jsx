import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/ProductContext';

function UserCard({
  id, name, email, role }) {
  const { deleteUsers } = useContext(ProductContext);

  return (
    <div>
      <p data-testid={ `admin_manage__element-user-table-item-number-${id}` }>{id}</p>
      <p data-testid={ `admin_manage__element-user-table-name--${id}` }>{name}</p>
      <p data-testid={ `admin_manage__element-user-table-email-${id}` }>
        {email}
      </p>
      <p data-testid={ `admin_manage__element-user-table-role-${id}` }>
        {role}
      </p>
      <button
        type="button"
        data-testid={ `admin_manage__element-user-table-remove-${id}` }
        onClick={ () => deleteUsers(id) }
      >
        remove
      </button>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
}.isRequired;

export default UserCard;
