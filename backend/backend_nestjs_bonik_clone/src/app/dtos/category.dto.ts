import { AutoMap } from '@automapper/classes';
import { ICategory } from '@prisma/client';

export class CategoryDto implements Partial<ICategory> {
  @AutoMap()
  categoryId: number;

  @AutoMap()
  categoryName: string;

  @AutoMap()
  srcImg: string;
}
