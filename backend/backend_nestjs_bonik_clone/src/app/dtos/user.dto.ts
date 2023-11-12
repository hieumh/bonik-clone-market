import { AutoMap } from '@automapper/classes';
import { IUser } from '@prisma/client';

export class UserDto implements Partial<IUser> {
  @AutoMap()
  userId: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;
}
