import {
  Controller,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { FlashDeal } from '../models/flash-deal.model';
import { FlashDealDto } from '../dtos/flash-deal.dto';
import { mapper } from 'src/mapping/mapper';
import { ProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import {
  TFlashDealsResponse,
  TProductsPaginationResult,
  TProductsResponse,
} from 'src/common/interfaces/product.interface';
import {
  DEFAULT_NO_OF_NEW_ARRIVALS,
  DEFAULT_NO_OF_TOP_RATINGS,
} from 'src/common/constants/product.constant';
import { IPaginationOptions } from 'src/common/helpers/pagination.helper';
import { JoiValidationPipe } from 'src/common/middlewares/pipes/joi-validation.pipe';
import { paginationSchema } from 'src/common/interfaces/common.interface';

@Injectable()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('search')
  async searchProduct(
    @Query('searchText') searchText: string,
    @Query('category', ParseIntPipe) categoryId: number,
  ) {
    return this.productService.search(searchText, categoryId);
  }

  @Get()
  @UsePipes(new JoiValidationPipe(paginationSchema))
  async getAllProduct(
    @Query() paginationOptions: IPaginationOptions,
  ): TProductsPaginationResult {
    const dataResponse = await this.productService.findAll(paginationOptions);

    return {
      ...dataResponse,
      items: dataResponse.items.map((product) =>
        mapper.map(product, Product, ProductDto),
      ),
    };
  }

  @Get('/flash-deal')
  @UsePipes(new JoiValidationPipe(paginationSchema))
  async getProductByFlashDeals(
    @Query() paginationOptions: IPaginationOptions,
  ): TFlashDealsResponse {
    const dataResponse = await this.productService.findAllFlashDeals(
      paginationOptions,
    );

    return {
      ...dataResponse,
      items: dataResponse.items.map((deal) =>
        mapper.map(deal, FlashDeal, FlashDealDto),
      ),
    };
  }

  @Get('/banner')
  @UsePipes(new JoiValidationPipe(paginationSchema))
  async getBanner(
    @Query() paginationOptions: IPaginationOptions,
  ): TProductsPaginationResult {
    const dataResponse = await this.productService.findAllByBanner(
      paginationOptions,
    );

    return {
      ...dataResponse,
      items: dataResponse.items.map((product) =>
        mapper.map(product, Product, ProductDto),
      ),
    };
  }

  @Get('/top-ratings')
  async getTopRatings(
    @Param('take', ParseIntPipe) takeNumber = DEFAULT_NO_OF_TOP_RATINGS,
  ): TProductsResponse {
    const topRatingProducts = await this.productService.findTopRatings(
      takeNumber,
    );

    return topRatingProducts.map((product) =>
      mapper.map(product, Product, ProductDto),
    );
  }

  @Get('/new-arrivals')
  async getNewArrivals(
    @Query('take', ParseIntPipe) takeNumber = DEFAULT_NO_OF_NEW_ARRIVALS,
  ): TProductsResponse {
    const newArrivals = await this.productService.findNewArrivals(takeNumber);

    return newArrivals.map((product) =>
      mapper.map(product, Product, ProductDto),
    );
  }

  @Get('/brand/:id')
  async getAllProductByBrand(
    @Param('id', ParseIntPipe) brandId: number,
    @Query() options?: IPaginationOptions,
  ) {
    const productResult = await this.productService.findAllByBrand(
      brandId,
      options,
    );

    return {
      ...productResult,
      items: productResult.items.map((item) =>
        mapper.map(item, Product, ProductDto),
      ),
    };
  }
}
