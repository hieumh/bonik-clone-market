import { PrismaClient, IBanner } from '@prisma/client';
import { Injectable, UseGuards } from '@nestjs/common';
import { ICreateBanner } from 'src/common/interfaces/banner.interface';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
@UseGuards(AuthGuard('jwt'))
export class BannerService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: ICreateBanner): Promise<IBanner> {
    return await this.prisma.iBanner.create({
      data,
    });
  }

  async findAllBanner(): Promise<IBanner[]> {
    return await this.prisma.iBanner.findMany({
      include: {
        product: true,
      },
    });
  }
}
