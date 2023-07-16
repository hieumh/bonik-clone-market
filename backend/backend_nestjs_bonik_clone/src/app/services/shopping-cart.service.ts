import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';
import { ICartProduct, PrismaClient } from '@prisma/client';

@Injectable()
export class ShoppingCartService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll() {
    return await this.prisma.iCartProduct.findMany({
      include: {
        product: true,
        shoppingCart: true,
      },
    });
  }

  // when handle need to handle when quantity === 0 -> delete the product (haven't handled yet)
  async updateQuantityMapping(
    cartId: number,
    productId: number,
  ): Promise<ICartProduct> {
    let currentCart = await this.prisma.iShoppingCart.findFirst({
      where: {
        cartId: Number(cartId),
      },
    });

    if (currentCart === null) {
      currentCart = await this.prisma.iShoppingCart.create({
        data: { closedOrder: false },
      });
    }

    const existMapping = await this.prisma.iCartProduct.findFirst({
      where: {
        cartId: currentCart.cartId,
        productId: productId,
      },
    });

    let updatedCart;
    if (existMapping) {
      updatedCart = await this.prisma.iCartProduct.update({
        where: {
          cartProductId: existMapping.cartProductId,
        },
        data: {
          quantity: existMapping.quantity + 1,
        },
      });
    } else {
      updatedCart = await this.prisma.iCartProduct.create({
        data: {
          cartId: currentCart.cartId,
          productId: productId,
          quantity: 1,
        },
      });
    }

    return updatedCart;
  }
}
