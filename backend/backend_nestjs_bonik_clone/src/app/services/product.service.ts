import { PrismaClient, IProduct, IFlashDeal } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { map, take, orderBy } from 'lodash';
import { getPercentOfFirstNum } from 'src/common/helpers/common.helper';
import {
  IPaginationOptions,
  IPaginationResult,
  paginate,
} from 'src/common/helpers/pagination.helper';
import { DEFAULT_NO_OF_TOP_RATINGS } from 'src/common/constants/product.constant';
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

  async findTopRatings(
    takeNumber = DEFAULT_NO_OF_TOP_RATINGS,
  ): Promise<Array<IProduct>> {
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

  async findBigDiscounts(
    paginationOptions?: IPaginationOptions,
  ): Promise<IPaginationResult<IProduct & { flashDeal?: IFlashDeal }>> {
    const pagingProducts = await this.findAll(paginationOptions);

    return {
      ...pagingProducts,
      items: orderBy(
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
    };
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
