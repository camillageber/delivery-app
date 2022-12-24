import React, { useEffect, useContext } from 'react';
import NavigationAdm from '../../components/adminComponents/NavigationAdm';
import NewUserByAdmComponent
  from '../../components/adminComponents/NewUserByAdmComponent';
import ProductContext from '../../context/ProductContext';
import UserCard from '../../components/adminComponents/UserCard';

function AdminManagement() {
  const { users, fetchUsers, update } = useContext(ProductContext);

  useEffect(() => {
    fetchUsers();
  }, [update]);

  return (
    <div>
      <NavigationAdm />
      <NewUserByAdmComponent />
      <main>
        <h3>Usuários Cadastrados</h3>
        {users.map((user, index) => (
          <div key={ index }>
            <UserCard
              id={ user.id }
              name={ user.name }
              email={ user.email }
              role={ user.role }
            />
            <p
              data-testid="admin_manage__element-invalid-register"
            >
              {user.message}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default AdminManagement;
