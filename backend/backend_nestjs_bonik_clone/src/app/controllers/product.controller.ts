import { Controller, Get, Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Injectable()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.findAll();
  }

  @Get('/flash-deal')
  getProductByFlashDeals() {
    return this.productService.findAllFlashDeals();
  }

  @Get('/banner')
  getBanner() {
    return this.productService.findAllByBanner();
  }
}
