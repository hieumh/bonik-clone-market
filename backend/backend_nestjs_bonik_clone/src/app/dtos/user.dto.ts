import { AutoMap } from '@automapper/classes';

export class UserDto {
  @AutoMap()
  userId: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;
}
