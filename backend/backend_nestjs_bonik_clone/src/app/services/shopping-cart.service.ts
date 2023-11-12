import { ConflictException, Injectable } from '@nestjs/common';
import { ICartProduct, PrismaClient } from '@prisma/client';
import { NotFoundDataException } from 'src/common/exceptions/http-exception/not-found-data.exception';
import {
  IPaginationOptions,
  IPaginationResult,
  paginate,
} from 'src/common/helpers/pagination.helper';
import { isEmpty, isNil } from 'lodash';
import { TShoppingCartCreate } from '../models/shopping-cart.model';

@Injectable()
export class ShoppingCartService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(
    paginationOptions?: IPaginationOptions,
  ): Promise<IPaginationResult<ICartProduct>> {
    return paginate<ICartProduct>(this.prisma.iCartProduct, {
      ...paginationOptions,
      include: {
        product: true,
      },
    });
  }

  async findCartProductByField(
    cartProduct: Partial<ICartProduct>,
  ): Promise<ICartProduct[]> {
    return this.prisma.iCartProduct.findMany({
      where: {
        ...cartProduct,
      },
    });
  }

  async createCartProduct(data: TShoppingCartCreate, userId: number) {
    const { productId } = data;

    if (!isEmpty(await this.findCartProductByField({ productId, userId }))) {
      throw new ConflictException();
    }

    return await this.prisma.iCartProduct.create({
      data: {
        productId,
        quantity: 1,
        userId,
        closeOrder: false,
      },
    });
  }

  async findCartProductById(
    cartProductId: number,
  ): Promise<ICartProduct | null> {
    return await this.prisma.iCartProduct.findFirst({
      where: {
        cartProductId,
      },
    });
  }

  async deleteCartProduct(cartProductId: number): Promise<ICartProduct> {
    return await this.prisma.iCartProduct.delete({
      where: {
        cartProductId,
      },
    });
  }

  async updateQuantityCartProduct(
    cartProductId: number,
    quantity: number,
  ): Promise<ICartProduct> {
    const currentCartMapping = await this.findCartProductById(cartProductId);

    if (!currentCartMapping) {
      throw new NotFoundDataException();
    }

    if (quantity < 0 || isNil(quantity)) {
      throw new ConflictException();
    }

    return await this.prisma.iCartProduct.update({
      where: {
        cartProductId: currentCartMapping.cartProductId,
      },
      data: {
        quantity,
      },
    });
  }
}
