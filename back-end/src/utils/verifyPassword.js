const md5 = require('md5');

const compareHashs = (hashDb, password) => {
    const createHash = md5(password);
    if (hashDb === createHash) return true;
    return false;
};

module.exports = compareHashs;