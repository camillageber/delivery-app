import React from 'react';
import NavigationAdm from '../../components/adminComponents/NavigationAdm';
import NewUserByAdmComponent
  from '../../components/adminComponents/NewUserByAdmComponent';

function AdminManagement() {
  return (
    <div>
      <NavigationAdm />
      <NewUserByAdmComponent />
      <main>
        {/* aqui um mapeamento das orders */}
      </main>
    </div>
  );
}

export default AdminManagement;
