import { Module } from '@nestjs/common';
import { ShoppingCartController } from 'src/app/controllers/shopping-cart.controller';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { prismaProvider } from 'src/common/providers/prisma.provider';

@Module({
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService, prismaProvider],
})
export class ShoppingCartModule {}
