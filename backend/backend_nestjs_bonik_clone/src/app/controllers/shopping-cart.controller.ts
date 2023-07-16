import { Controller, Get, Post, Body, Injectable } from '@nestjs/common';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Injectable()
@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCardService: ShoppingCartService) {}

  @Get()
  getAllShoppingCart() {
    return this.shoppingCardService.findAll();
  }

  @Post()
  updateShoppingCartMapping(
    @Body() body: { cartId: string; productId: string },
  ) {
    const { cartId, productId } = body;
    return this.shoppingCardService.updateQuantityMapping(
      Number(cartId),
      Number(productId),
    );
  }
}
