class GenericError extends Error {
  constructor(message) {
    super(message);
    this.error = message;
  }
}

module.exports = GenericError;
