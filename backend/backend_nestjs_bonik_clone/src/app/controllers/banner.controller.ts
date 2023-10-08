import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { BannerService } from '../services/banner.service';
import { map } from 'lodash';
import { Banner } from '../models/banner.model';
import { BannerDto } from '../dtos/banner.dto';
import { mapper } from 'src/mapping/mapper';
import {
  ICreateBanner,
  createBannerSchema,
} from 'src/common/interfaces/banner.interface';
import { JoiValidationPipe } from 'src/common/middlewares/pipes/joi-validation.pipe';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  async getBanner(): Promise<BannerDto[]> {
    const dataResponse = await this.bannerService.findAllBanner();

    return map(dataResponse, (banner) => mapper.map(banner, Banner, BannerDto));
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createBannerSchema))
  async createBanner(@Body() body: ICreateBanner): Promise<BannerDto> {
    const dataCreated = await this.bannerService.create(body);

    return mapper.map(dataCreated, Banner, BannerDto);
  }
}
