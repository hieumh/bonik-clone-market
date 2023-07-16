import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createMap, forMember, mapFrom } from '@automapper/core';
import { mapper } from './mapping/mapper';
import { ProductDto } from './app/dtos/product.dto';
import { Product } from './app/models/product.model';
import { FlashDeal } from './app/models/flash-deal.model';
import { FlashDealDto } from './app/dtos/flash-deal.dto';
import { getPercentOfFirstNum } from './common/helpers/common.helper';

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

  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
