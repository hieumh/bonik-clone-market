import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { compare, hash } from 'bcrypt';
import { IRegister } from 'src/common/interfaces/login.interface';
import { jwtConstants } from 'src/common/constants/auth.constant';
import { ITokenResponse } from 'src/common/interfaces/common.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUserById(id: number): Promise<User | null> {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotAcceptableException("Couldn't find user");
    }

    return user;
  }

  async validateUser(
    emailOrPhoneNumber: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.userService.findOne(emailOrPhoneNumber);
    if (!user) {
      throw new NotAcceptableException("Couldn't find user");
    }

    if (user && (await compare(password, user.password))) {
      return user;
    }

    return null;
  }

  async login(
    user: User,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const payload = { sub: user.userId, username: user.username };

    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '10m' }),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async register(user: IRegister): Promise<User> {
    const saltOrRounds = +(jwtConstants.saltOrRound as string);
    const userEncryptPassword = {
      ...user,
      password: await hash(user.password, saltOrRounds),
    };
    const newUser = this.userService.create(userEncryptPassword as User);

    return newUser;
  }

  async refreshToken(tokenCombine: ITokenResponse): Promise<ITokenResponse> {
    const { refresh_token: refreshToken } = tokenCombine;
    await this.jwtService.verify(refreshToken);

    const decodedToken = (await this.jwtService.decode(refreshToken)) || {};
    const sub = decodedToken['sub'];
    const username = decodedToken['username'];

    // generate new token
    const newToken = await this.jwtService.sign(
      { sub, username },
      { expiresIn: '10m' },
    );

    return {
      access_token: newToken,
      refresh_token: refreshToken,
    };
  }
}
