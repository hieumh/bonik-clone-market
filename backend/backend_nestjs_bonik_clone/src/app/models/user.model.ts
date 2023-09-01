import { AutoMap } from '@automapper/classes';

export class User {
  @AutoMap()
  userId: number;

  @AutoMap()
  username: string;

  password: string;

  @AutoMap()
  email: string;
}
