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

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
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
          source.flashDeal.dealPrice,
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
          source.dealPrice,
        ),
      ),
    ),
  );

  createMap(mapper, Category, CategoryDto);

  app.useGlobalFilters(
    new BadRequestExceptionFilter(),
    new InternalServerErrorExceptionFilter(),
    new NotFoundDataExceptionFilter(),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
