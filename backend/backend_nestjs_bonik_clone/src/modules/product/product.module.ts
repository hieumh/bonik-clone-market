import { Module } from '@nestjs/common';
import { ProductController } from 'src/app/controllers/product.controller';
import { ProductService } from 'src/app/services/product.service';
import { prismaProvider } from 'src/common/providers/prisma.provider';

@Module({
  controllers: [ProductController],
  providers: [ProductService, prismaProvider],
})
export class ProductModule {}
