import { Module } from '@nestjs/common';
import { prismaProvider } from 'src/common/providers/prisma.provider';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryController } from 'src/app/controllers/category.controller';
import { ProductService } from 'src/app/services/product.service';

@Module({
  controllers: [CategoryController],
  providers: [prismaProvider, CategoryService, ProductService],
})
export class CategoryModule {}
