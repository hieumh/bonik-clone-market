import { AutoMap } from '@automapper/classes';
import { ICategory } from '@prisma/client';

export class Category implements ICategory {
  @AutoMap()
  categoryId: number;

  @AutoMap()
  categoryName: string;
}
