import { AutoMap } from '@automapper/classes';

export class FlashDealDto {
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
}
