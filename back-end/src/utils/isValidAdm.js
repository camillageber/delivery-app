const isValidAdm = (res) => {
  const { role } = res.user;
  if (role !== 'administrator') {
    return false;
  }
  return true;
};

module.exports = isValidAdm;
