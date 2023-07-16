import { AutoMap } from '@automapper/classes';
import { IProduct } from '@prisma/client';

export class FlashDeal {
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

  product: IProduct;
}
