import { Module } from '@nestjs/common';
import { prismaProvider } from 'src/common/providers/prisma.provider';
import { UserService } from '../services/user.service';

@Module({
  providers: [UserService, prismaProvider],
  exports: [UserService],
})
export class UserModule {}
