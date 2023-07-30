import { Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from './base-exception.filter';
import { INTERNAL_SERVER_ERROR } from 'src/common/constants/common.constant';

@Catch(BadRequestExceptionFilter)
export class BadRequestExceptionFilter extends BaseExceptionFilter {
  protected getStatus(): number {
    return HttpStatus.BAD_REQUEST;
  }

  protected getMessage(message: string): string {
    return message || INTERNAL_SERVER_ERROR;
  }
}
