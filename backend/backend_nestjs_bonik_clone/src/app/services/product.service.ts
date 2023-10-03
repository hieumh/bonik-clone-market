import { PrismaClient, IProduct, IFlashDeal } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { TTopBestCategories } from 'src/common/interfaces/category.interface';
import { map, take, orderBy } from 'lodash';
import { getPercentOfFirstNum } from 'src/common/helpers/common.helper';
import {
  IPaginationOptions,
  IPaginationResult,
  paginate,
} from 'src/common/helpers/pagination.helper';
@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data): Promise<IProduct> {
    return await this.prisma.iProduct.create({ data });
  }

  async findAll(
    paginationOptions?: IPaginationOptions,
    options?: Record<string, any>,
  ): Promise<IPaginationResult<IProduct & { flashDeal?: IFlashDeal }>> {
    return paginate<IProduct>(this.prisma.iProduct, {
      ...paginationOptions,
      options,
      include: {
        flashDeal: true,
      },
    });
  }

  async findAllFlashDeals(
    paginationOptions?: IPaginationOptions,
  ): Promise<IPaginationResult<IFlashDeal>> {
    return paginate(this.prisma.iFlashDeal, {
      ...paginationOptions,
      include: {
        product: true,
      },
    });
  }

  // TODO: rewrite this service
  async findAllByBanner(
    paginationOptions?: IPaginationOptions,
  ): Promise<IPaginationResult<IProduct>> {
    return paginate(this.prisma.iProduct, {
      ...paginationOptions,
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

  async findNewArrivals(takeNumber: number): Promise<Array<IProduct>> {
    return await this.prisma.iProduct.findMany({
      include: {
        flashDeal: true,
      },
      orderBy: {
        createAt: 'desc',
      },
      take: takeNumber,
    });
  }

  async findBigDiscounts(takeNumber: number): Promise<Array<IProduct>> {
    const pagingProducts = await this.findAll();

    return take(
      orderBy(
        map(pagingProducts.items, (product) => ({
          ...product,
          salePercent: getPercentOfFirstNum(
            product.price - (product?.flashDeal?.dealPrice || 0),
            product.price,
          ),
        })),
        ['salePercent'],
        ['desc'],
      ),
      takeNumber,
    );
  }

  async findAllByBrand(id: number, options?: IPaginationOptions) {
    return await this.findAll(options, {
      where: {
        brandId: id,
      },
    });
  }

  async search(searchText: string, categoryId: number): Promise<IProduct[]> {
    return (await this.prisma.iProduct.findMany({
      where: {
        productName: {
          contains: searchText,
        },
        categoryId,
      },
    })) as IProduct[];
  }
}
