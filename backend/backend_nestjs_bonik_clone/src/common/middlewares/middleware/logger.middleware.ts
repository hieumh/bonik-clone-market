import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction } from 'express';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, url } = req;

    try {
      next();
    } finally {
      const { statusText } = res;

      this.logger.log(`Url: ${url}, Method: ${method}, Status:${statusText}`);
    }
  }
}
