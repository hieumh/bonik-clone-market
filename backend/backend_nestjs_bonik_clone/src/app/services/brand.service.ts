import { Injectable } from '@nestjs/common';
import { IBrand, PrismaClient } from '@prisma/client';
import { paginate } from 'src/common/helpers/pagination.helper';

@Injectable()
export class BrandService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAllBrand(options) {
    return await paginate<IBrand>(this.prismaClient.iBrand, options);
  }
}
