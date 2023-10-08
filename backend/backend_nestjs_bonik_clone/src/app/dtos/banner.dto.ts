import { AutoMap } from '@automapper/classes';
import { IProduct } from '@prisma/client';

export class BannerDto {
  @AutoMap()
  bannerId: number;

  @AutoMap()
  productId: number;

  @AutoMap()
  title: string;

  @AutoMap()
  description: string;

  @AutoMap()
  product?: IProduct;
}
