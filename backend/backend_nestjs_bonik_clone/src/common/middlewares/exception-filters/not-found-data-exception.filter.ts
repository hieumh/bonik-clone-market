import { HttpStatus, Catch } from '@nestjs/common';
import { NOT_FOUND_DATA } from 'src/common/constants/common.constant';
import { NotFoundDataException } from 'src/common/exceptions/http-exception/not-found-data.exception';
import { BaseExceptionFilter } from './base-exception.filter';

@Catch(NotFoundDataException)
export class NotFoundDataExceptionFilter extends BaseExceptionFilter {
  protected getStatus(statusCode?: HttpStatus): HttpStatus {
    return statusCode || HttpStatus.NOT_FOUND;
  }

  protected getMessage(message?: string): string {
    return message || NOT_FOUND_DATA;
  }
}
