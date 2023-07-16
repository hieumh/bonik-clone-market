import { PrismaClient, Prisma, IProduct, IFlashDeal } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { mapper } from 'src/mapping/mapper';
import { ProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { FlashDeal } from '../models/flash-deal.model';
import { FlashDealDto } from '../dtos/flash-deal.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data) {
    const result = await this.prisma.iProduct.create({ data });

    return result;
  }

  async findAll() {
    const allProducts = await this.prisma.iProduct.findMany();

    return allProducts;
  }

  async findAllFlashDeals() {
    const flashDeals = await this.prisma.iFlashDeal.findMany({
      include: {
        product: true,
      },
    });

    return flashDeals.map((element) =>
      mapper.map(element, FlashDeal, FlashDealDto),
    );
  }

  async findAllByBanner(): Promise<ProductDto[]> {
    const allProduct: IProduct[] = await this.prisma.iProduct.findMany({
      include: {
        flashDeal: true,
      },
    });

    return allProduct.map((product) =>
      mapper.map(product, Product, ProductDto),
    );
  }
}
