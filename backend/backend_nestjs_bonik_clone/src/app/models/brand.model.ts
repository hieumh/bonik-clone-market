import { AutoMap } from '@automapper/classes';
import { IBrand } from '@prisma/client';

export class Brand implements IBrand {
  @AutoMap()
  brandId: number;

  @AutoMap()
  name: string;
}
