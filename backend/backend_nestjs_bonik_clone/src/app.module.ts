import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './app/modules/product/product.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { loggerProvider } from './common/providers/logger.provider';
import { ShoppingCartModule } from './app/modules/shopping-card/shopping-cart.module';

@Module({
  imports: [ProductModule, ShoppingCartModule],
  controllers: [AppController],
  providers: [AppService, loggerProvider],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
