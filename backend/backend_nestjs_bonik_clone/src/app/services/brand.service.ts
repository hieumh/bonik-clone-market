import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { paginate } from 'src/common/helpers/pagination.helper';

@Injectable()
export class BrandService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAllBrand(options) {
    return await paginate(this.prismaClient.iBrand, options);
  }
}
