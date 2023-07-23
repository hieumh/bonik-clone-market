import {
  Controller,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { FlashDeal } from '../models/flash-deal.model';
import { FlashDealDto } from '../dtos/flash-deal.dto';
import { mapper } from 'src/mapping/mapper';
import { ProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import {
  TFlashDealsResponse,
  TProductsResponse,
} from 'src/common/interfaces/product.interface';
import {
  DEFAULT_NO_OF_NEW_ARRIVALS,
  DEFAULT_NO_OF_TOP_RATINGS,
} from 'src/common/constants/product.constant';

@Injectable()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProduct(): TProductsResponse {
    const allProducts = await this.productService.findAll();

    return allProducts.map((product) =>
      mapper.map(product, Product, ProductDto),
    );
  }

  @Get('/flash-deal')
  async getProductByFlashDeals(): TFlashDealsResponse {
    const allFlashDeals = await this.productService.findAllFlashDeals();

    return allFlashDeals.map((flashDeal) =>
      mapper.map(flashDeal, FlashDeal, FlashDealDto),
    );
  }

  @Get('/banner')
  async getBanner(): TProductsResponse {
    const productByBanners = await this.productService.findAllByBanner();

    return productByBanners.map((product) =>
      mapper.map(product, Product, ProductDto),
    );
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
    @Param('take', ParseIntPipe) takeNumber = DEFAULT_NO_OF_NEW_ARRIVALS,
  ) {
    const newArrivals = await this.productService.findNewArrivals(takeNumber);

    return newArrivals.map((product) =>
      mapper.map(product, Product, ProductDto),
    );
  }
}
