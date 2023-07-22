import { AutoMap } from '@automapper/classes';
import { IFlashDeal, IProduct } from '@prisma/client';

export class Product implements IProduct {
  @AutoMap()
  readonly productId: number;

  @AutoMap()
  readonly categoryId: number;

  @AutoMap()
  readonly productName: string;

  @AutoMap()
  productSoldCount: number;

  @AutoMap()
  price: number;

  @AutoMap()
  description: string;

  @AutoMap()
  rating: number;

  flashDeal?: IFlashDeal;
}
