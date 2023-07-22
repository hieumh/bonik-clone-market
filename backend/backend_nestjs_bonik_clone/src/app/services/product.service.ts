import { PrismaClient, Prisma, IProduct, IFlashDeal } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { TTopBestCategories } from 'src/common/interfaces/category.interface';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data): Promise<IProduct> {
    return await this.prisma.iProduct.create({ data });
  }

  async findAll(): Promise<Array<IProduct>> {
    return await this.prisma.iProduct.findMany();
  }

  async findAllFlashDeals(): Promise<Array<IFlashDeal>> {
    return await this.prisma.iFlashDeal.findMany({
      include: {
        product: true,
      },
    });
  }

  async findAllByBanner(): Promise<Array<IProduct>> {
    return await this.prisma.iProduct.findMany({
      include: {
        flashDeal: true,
      },
    });
  }

  async findTopBestSeller(): Promise<Array<IProduct>> {
    return await this.prisma.iProduct.findMany({
      orderBy: {
        productSoldCount: 'desc',
      },
      include: {
        flashDeal: true,
      },
    });
  }

  // TODO: define right return type for this service
  async findTopBestCategory(): TTopBestCategories {
    return (await this.prisma.iProduct.groupBy({
      by: ['categoryId'],
      _sum: {
        productSoldCount: true,
      },
      orderBy: {
        _sum: {
          productSoldCount: 'desc',
        },
      },
    })) as unknown as TTopBestCategories;
  }

  // TODO: update this feature after implement authentication service
  async findTopRatings(takeNumber: number): Promise<Array<IProduct>> {
    return await this.prisma.iProduct.findMany({
      include: {
        flashDeal: true,
      },
      orderBy: {
        rating: 'desc',
      },
      take: takeNumber,
    });
  }
}
