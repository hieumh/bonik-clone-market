import { AutoMap } from '@automapper/classes';
import { IProduct } from '@prisma/client';
import { FlashDeal } from '../models/flash-deal.model';

export class ProductDto implements Partial<IProduct> {
  @AutoMap()
  readonly productId: number;

  @AutoMap()
  readonly categoryId: number;

  @AutoMap()
  readonly productName: string;

  @AutoMap()
  readonly brandId: number;

  @AutoMap()
  createAt: Date;

  @AutoMap()
  productSoldCount: number;

  salePercent: number;

  @AutoMap()
  price: number;

  @AutoMap()
  description: string;

  @AutoMap()
  rating: number;

  flashDeal: FlashDeal;
}
