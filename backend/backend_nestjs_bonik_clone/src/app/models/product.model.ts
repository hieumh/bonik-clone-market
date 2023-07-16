import { AutoMap } from '@automapper/classes';
import { IProduct } from '@prisma/client';
import { FlashDeal } from './flash-deal.model';

export class Product implements IProduct {
  @AutoMap()
  readonly productId: number;

  @AutoMap()
  readonly categoryId: number;

  @AutoMap()
  readonly productName: string;

  @AutoMap()
  price: number;

  @AutoMap()
  description: string;

  @AutoMap()
  rating: number;

  flashDeal?: FlashDeal;
}
