class CreateError extends Error {
    constructor(name, message) {
      super(message);
      super.name = name;
    }
  }

module.exports = CreateError;