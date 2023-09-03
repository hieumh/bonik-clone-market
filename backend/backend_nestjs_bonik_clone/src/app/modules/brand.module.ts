import { Module } from '@nestjs/common';
import { brandController } from '../controllers/brand.controller';
import { BrandService } from '../services/brand.service';
import { prismaProvider } from 'src/common/providers/prisma.provider';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';

@Module({
  controllers: [brandController],
  providers: [BrandService, prismaProvider],
  imports: [UserModule, AuthModule],
})
export class BrandModule {}
