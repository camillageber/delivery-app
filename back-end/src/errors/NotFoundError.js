  class NotFoundError extends Error {
    status;
    constructor(message) {
      super(message);
      this.status = 404;
    }
  }
module.exports = NotFoundError;