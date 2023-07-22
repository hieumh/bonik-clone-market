import {
  Catch,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { BaseExceptionFilter } from './base-exception.filter';
import { INTERNAL_SERVER_ERROR } from 'src/common/constants/common.constant';

@Catch(InternalServerErrorException)
export class InternalServerErrorExceptionFilter extends BaseExceptionFilter {
  protected getStatus(statusCode?: HttpStatus): HttpStatus {
    return statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  }

  protected getMessage(message?: string): string {
    return message || INTERNAL_SERVER_ERROR;
  }
}
