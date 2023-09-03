import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createMap, forMember, mapFrom } from '@automapper/core';
import { mapper } from './mapping/mapper';
import { ProductDto } from './app/dtos/product.dto';
import { Product } from './app/models/product.model';
import { FlashDeal } from './app/models/flash-deal.model';
import { FlashDealDto } from './app/dtos/flash-deal.dto';
import { getPercentOfFirstNum } from './common/helpers/common.helper';
import { BadRequestExceptionFilter } from './common/middlewares/exception-filters/bad-request-exception.filter';
import { InternalServerErrorExceptionFilter } from './common/middlewares/exception-filters/internal-server-error-exception.filter';
import { Category } from './app/models/category.model';
import { CategoryDto } from './app/dtos/category.dto';
import { NotFoundDataExceptionFilter } from './common/middlewares/exception-filters/not-found-data-exception.filter';
import { BrandDto } from './app/dtos/brand.dto';
import { Brand } from './app/models/brand.model';
import { User } from './app/models/user.model';
import { UserDto } from './app/dtos/user.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5173/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  createMap(
    mapper,
    Product,
    ProductDto,
    forMember(
      (destination) => destination.salePercent,
      mapFrom((source) =>
        getPercentOfFirstNum(
          source.price - source.flashDeal.dealPrice,
          source.price,
        ),
      ),
    ),
  );
  createMap(
    mapper,
    FlashDeal,
    FlashDealDto,
    forMember(
      (destination) => destination.salePercent,
      mapFrom((source) =>
        getPercentOfFirstNum(
          source.product.price - source.dealPrice,
          source.product.price,
        ),
      ),
    ),
  );
  createMap(mapper, Category, CategoryDto);
  createMap(mapper, Brand, BrandDto);
  createMap(mapper, User, UserDto);

  app.useGlobalFilters(
    new BadRequestExceptionFilter(),
    new InternalServerErrorExceptionFilter(),
    new NotFoundDataExceptionFilter(),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
