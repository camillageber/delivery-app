class UnprocessableError extends Error {
    status;
    constructor(message) {
      super(message);
      this.status = 422;
    }
}