class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const creataeCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}

module.exports = {
    creataeCustomError,
    CustomAPIError
}