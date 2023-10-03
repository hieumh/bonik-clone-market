import {
  Controller,
  Get,
  Post,
  Body,
  Injectable,
  Query,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { EUpdateQuantity } from 'src/common/constants/common.constant';
import {
  TShoppingCartResponse,
  TShoppingCartsResponse,
} from 'src/common/interfaces/shopping-cart.interface';
import { JoiValidationPipe } from 'src/common/middlewares/pipes/joi-validation.pipe';
import { shoppingCartMappingSchema } from 'src/common/interfaces/category.interface';
import { paginationSchema } from 'src/common/interfaces/common.interface';
import { IPaginationOptions } from 'src/common/helpers/pagination.helper';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
@Controller('shopping-cart')
@UseGuards(AuthGuard('jwt'))
export class ShoppingCartController {
  constructor(private readonly shoppingCardService: ShoppingCartService) {}

  @Get()
  @UsePipes(new JoiValidationPipe(paginationSchema))
  getAllShoppingCart(
    @Query() paginationOptions: IPaginationOptions,
  ): TShoppingCartsResponse {
    return this.shoppingCardService.findAll(paginationOptions);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(shoppingCartMappingSchema))
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
