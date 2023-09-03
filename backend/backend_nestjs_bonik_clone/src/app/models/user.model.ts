import { AutoMap } from '@automapper/classes';
import { IUser } from '@prisma/client';

export class User implements IUser {
  @AutoMap()
  userId: number;

  @AutoMap()
  username: string;

  password: string;

  @AutoMap()
  email: string;
}
