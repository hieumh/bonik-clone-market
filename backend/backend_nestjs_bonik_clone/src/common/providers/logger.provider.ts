import { Provider } from '@nestjs/common';
import { LoggerService } from '../services/logger.service';

export const loggerProvider: Provider<LoggerService> = {
  provide: LoggerService,
  useFactory: () => new LoggerService('Product service'),
};
