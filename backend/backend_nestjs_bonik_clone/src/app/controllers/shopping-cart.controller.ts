import { Controller, Get, Post, Body, Injectable } from '@nestjs/common';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { EUpdateQuantity } from 'src/common/constants/common.constant';
import {
  TShoppingCartResponse,
  TShoppingCartsResponse,
} from 'src/common/interfaces/shopping-cart.interface';

@Injectable()
@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCardService: ShoppingCartService) {}

  @Get()
  getAllShoppingCart(): TShoppingCartsResponse {
    return this.shoppingCardService.findAll();
  }

  @Post()
  updateShoppingCartMapping(
    @Body() body: { cartProductId: number; type: EUpdateQuantity },
  ): TShoppingCartResponse {
    const { cartProductId, type } = body;
    return this.shoppingCardService.updateQuantityCartProduct(
      cartProductId,
      type,
    );
  }
}
