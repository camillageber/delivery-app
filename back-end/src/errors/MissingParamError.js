class MissingParamError extends Error {
    status;
    constructor(message) {
      super(message);
      this.status = 400;
    }
}
module.exports = MissingParamError;