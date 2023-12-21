import { AutoMap } from '@automapper/classes';
import { IFlashDeal, IProduct } from '@prisma/client';

export class FlashDeal implements IFlashDeal {
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

  @AutoMap()
  product: IProduct;
}
