import {
  Controller,
  Get,
  Post,
  Body,
  Injectable,
  Query,
  UsePipes,
  UseGuards,
  Param,
  Delete,
  Put,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { ShoppingCartService } from '../services/shopping-cart.service';
import {
  TShoppingCartResponse,
  TShoppingCartsResponse,
} from 'src/common/interfaces/shopping-cart.interface';
import { JoiValidationPipe } from 'src/common/middlewares/pipes/joi-validation.pipe';
import {
  shoppingCartMappingSchema,
  shoppingCartSchema,
} from 'src/common/interfaces/category.interface';
import { paginationSchema } from 'src/common/interfaces/common.interface';
import { IPaginationOptions } from 'src/common/helpers/pagination.helper';
import { AuthGuard } from '@nestjs/passport';
import { TShoppingCartCreate } from '../models/shopping-cart.model';

@Injectable()
@Controller('shopping-cart')
@UseGuards(AuthGuard('jwt'))
export class ShoppingCartController {
  constructor(private readonly shoppingCardService: ShoppingCartService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(shoppingCartSchema))
  createShoppingCart(@Body() body: TShoppingCartCreate, @Req() req) {
    const { userId } = req.user;
    const { productId, quantity } = body;
    return this.shoppingCardService.createCartProduct(
      {
        productId,
        quantity,
      },
      userId,
    );
  }

  @Get()
  @UsePipes(new JoiValidationPipe(paginationSchema))
  getAllShoppingCart(
    @Query() paginationOptions: IPaginationOptions,
  ): TShoppingCartsResponse {
    return this.shoppingCardService.findAll(paginationOptions);
  }

  @Put(':id')
  updateShoppingCartQuantity(
    @Param('id', ParseIntPipe) cartProductId: number,
    @Body(new JoiValidationPipe(shoppingCartMappingSchema))
    body: { quantity: number },
  ): TShoppingCartResponse {
    const { quantity } = body;
    return this.shoppingCardService.updateQuantityCartProduct(
      cartProductId,
      quantity,
    );
  }

  @Delete(':id')
  deleteShoppingCart(@Param('id', ParseIntPipe) cartProductId: number) {
    return this.shoppingCardService.deleteCartProduct(cartProductId);
  }

  @Post()
  checkIn(@Body() price: number) {
    // do some stuff when check in here
    return 'success';
  }
}
