import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from 'src/common/interfaces/common.interface';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const token = req?.cookies['accessToken'];
          if (!token) {
            return null;
          }

          return token;
        },
      ]),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload, verified: any): Promise<any> {
    if (!verified) {
      throw new UnauthorizedException();
    }

    const user = await this.authService.validateUserById(Number(payload.sub));

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
