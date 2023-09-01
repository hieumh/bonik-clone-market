import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './app/modules/product.module';
import { LoggerMiddleware } from './common/middlewares/middleware/logger.middleware';
import { loggerProvider } from './common/providers/logger.provider';
import { ShoppingCartModule } from './app/modules/shopping-cart.module';
import { CategoryModule } from './app/modules/category.module';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { ENV_FILE_PATH } from './config/configuration.config';
import { AuthModule } from './app/modules/auth.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    ShoppingCartModule,
    CategoryModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ConfigModule.forRoot({
      envFilePath: ENV_FILE_PATH[process.env.NODE_ENV || 'development'],
      load: [databaseConfig],
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, loggerProvider],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
