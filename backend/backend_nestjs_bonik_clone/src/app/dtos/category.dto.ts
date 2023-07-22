import { AutoMap } from '@automapper/classes';

export class CategoryDto {
  @AutoMap()
  categoryId: number;

  @AutoMap()
  categoryName: string;
}
