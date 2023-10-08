import { AutoMap } from '@automapper/classes';
import { IBanner, IProduct } from '@prisma/client';

export class Banner implements IBanner {
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
