class UnprocessableError extends Error {
    constructor(message) {
      super(message);
      this.status = 422;
    }
}
module.exports = UnprocessableError;