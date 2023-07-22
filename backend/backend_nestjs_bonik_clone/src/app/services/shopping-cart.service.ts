import { Injectable } from '@nestjs/common';
import { ICartProduct, IShoppingCart, PrismaClient } from '@prisma/client';
import { NotFoundDataException } from 'src/common/exceptions/not-found-data.exception';
import { EUpdateQuantity } from 'src/common/constants/common.constant';

@Injectable()
export class ShoppingCartService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Array<ICartProduct>> {
    return await this.prisma.iCartProduct.findMany({
      include: {
        product: true,
        shoppingCart: true,
      },
    });
  }

  async findCart(id: number): Promise<IShoppingCart> {
    return await this.prisma.iShoppingCart.findFirst({
      where: {
        cartId: Number(id),
      },
    });
  }

  async createCart(): Promise<IShoppingCart> {
    return await this.prisma.iShoppingCart.create({
      data: { closedOrder: false },
    });
  }

  async createCartProduct(data: Omit<ICartProduct, 'cartProductId'>) {
    if (!this.findCart(data.cartId)) {
      throw new NotFoundDataException();
    }

    return await this.prisma.iCartProduct.create({
      data,
    });
  }

  async findCartProduct(cartProductId: number): Promise<ICartProduct> {
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
    type: EUpdateQuantity,
  ): Promise<ICartProduct> {
    const currentCartMapping = await this.findCartProduct(cartProductId);

    if (!currentCartMapping) {
      throw new NotFoundDataException();
    }

    if (
      type === EUpdateQuantity.DECREMENT &&
      currentCartMapping.quantity - 1 === 0
    ) {
      return await this.deleteCartProduct(cartProductId);
    }

    return await this.prisma.iCartProduct.update({
      where: {
        cartProductId: currentCartMapping.cartProductId,
      },
      data: {
        quantity:
          type === EUpdateQuantity.INCREMENT
            ? ++currentCartMapping.quantity
            : currentCartMapping.quantity - 1,
      },
    });
  }
}
