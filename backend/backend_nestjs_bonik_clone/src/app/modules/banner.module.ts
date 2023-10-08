import { Module } from '@nestjs/common';
import { BannerController } from '../controllers/banner.controller';
import { BannerService } from '../services/banner.service';
import { prismaProvider } from 'src/common/providers/prisma.provider';

@Module({
  controllers: [BannerController],
  providers: [BannerService, prismaProvider],
})
export class BannerModule {}
