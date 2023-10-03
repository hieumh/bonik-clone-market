import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { BrandService } from '../services/brand.service';
import { IPaginationOptions } from 'src/common/helpers/pagination.helper';
import { Brand } from '../models/brand.model';
import { BrandDto } from '../dtos/brand.dto';
import { mapper } from 'src/mapping/mapper';
import { AuthGuard } from '@nestjs/passport';

@Controller('brand')
@UseGuards(AuthGuard('jwt'))
export class brandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAllBrand(@Query() options: IPaginationOptions) {
    const result = await this.brandService.getAllBrand(options);

    return {
      ...result,
      items: result.items.map((item) => mapper.map(item, Brand, BrandDto)),
    };
  }
}
