import { AutoMap } from '@automapper/classes';

export class BrandDto {
  @AutoMap()
  brandId: number;

  @AutoMap()
  name: string;
}
