import { AutoMap } from '@automapper/classes';
import { IBrand } from '@prisma/client';

export class BrandDto implements Partial<IBrand> {
  @AutoMap()
  brandId: number;

  @AutoMap()
  name: string;
}
