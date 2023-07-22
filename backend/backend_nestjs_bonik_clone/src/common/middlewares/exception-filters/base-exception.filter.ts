import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR } from 'src/common/constants/common.constant';

@Catch(HttpException)
export class BaseExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const statusCode = this.getStatus((exception as HttpException).getStatus());
    const message = this.getMessage(exception.message);

    response.status(statusCode).json({
      statusCode,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }

  protected getStatus(statusCode?: HttpStatus): number {
    return statusCode || HttpStatus.BAD_REQUEST;
  }

  protected getMessage(message?: string): string {
    return message || INTERNAL_SERVER_ERROR;
  }
}
