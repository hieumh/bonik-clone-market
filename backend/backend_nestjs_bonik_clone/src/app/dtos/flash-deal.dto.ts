import { AutoMap } from '@automapper/classes';
import { Product } from '../models/product.model';
import { IFlashDeal } from '@prisma/client';

export class FlashDealDto implements Partial<IFlashDeal> {
  @AutoMap()
  dealId: number;

  @AutoMap()
  productId: number;

  @AutoMap()
  dealName: string;

  @AutoMap()
  dealPrice: number;

  @AutoMap()
  startDate: Date;

  @AutoMap()
  endDate: Date;

  salePercent: number;

  @AutoMap()
  product: Product;
}
