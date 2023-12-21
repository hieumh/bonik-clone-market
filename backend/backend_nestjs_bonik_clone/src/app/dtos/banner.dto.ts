import { AutoMap } from '@automapper/classes';
import { IProduct } from '@prisma/client';
import { Banner } from '../models/banner.model';

export class BannerDto implements Partial<Banner> {
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
