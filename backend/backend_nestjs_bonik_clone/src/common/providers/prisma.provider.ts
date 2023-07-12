import { PrismaClient } from '@prisma/client';
import { Provider } from '@nestjs/common';

export const prismaProvider: Provider<PrismaClient> = {
  provide: PrismaClient,
  useValue: new PrismaClient(),
};
