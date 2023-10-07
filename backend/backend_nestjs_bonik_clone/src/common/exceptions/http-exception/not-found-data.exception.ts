import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundDataException extends HttpException {
  constructor(
    message = 'Not Found',
    statusCode: HttpStatus = HttpStatus.NOT_FOUND,
  ) {
    super(message, statusCode);
  }
}
