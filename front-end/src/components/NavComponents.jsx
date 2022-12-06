import React from 'react';
import PropTypes from 'prop-types';

function NavComponents({ Category, path }) {
  return (
    <section>
      <a href={ `/customer/${path}` }>{Category}</a>
    </section>
  );
}

NavComponents.propTypes = {
  Category: PropTypes.string.isRequired,
  path: PropTypes.string,
};

NavComponents.defaultProps = {
  path: '',
};

export default NavComponents;
