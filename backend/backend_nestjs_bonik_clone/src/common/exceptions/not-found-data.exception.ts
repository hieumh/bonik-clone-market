import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundDataException extends HttpException {
  constructor(message?: string, statusCode?: HttpStatus) {
    super(message, statusCode);
  }
}
