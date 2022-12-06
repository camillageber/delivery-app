import React from 'react';

function NavComponents(Category, path) {
  return (
    <section>
      <a href={ `/customer/${path}` }>{Category}</a>
    </section>
  );
}

export default NavComponents;
