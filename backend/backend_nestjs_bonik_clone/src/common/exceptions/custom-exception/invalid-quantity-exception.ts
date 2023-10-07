export class InvalidQuantityException extends Error {
  constructor() {
    super('Invalid quantity. quantity must be greater than or equal to 0');
    this.name = 'InvalidQuantityException';
  }
}
