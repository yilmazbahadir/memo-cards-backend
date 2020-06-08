export default class RestError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super(name);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;
  }
}
