import { PrismaClient, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: Prisma.ProductCreateInput) {
    try {
      const result = await this.prisma.product.create({ data });
      return result;
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    try {
      return await this.prisma.product.findMany();
    } catch (e) {
      throw e;
    }
  }

  async findAllFlashDeals() {
    try {
      return this.prisma.flashDeal.findMany();
    } catch (e) {
      throw e;
    }
  }

  async findAllByBanner() {
    try {
      const allProduct = await this.prisma.product.findMany({
        include: {
          flashDeal: true,
          topRating: true,
        },
      });

      return allProduct;
    } catch (e) {
      throw e;
    }
  }
}
