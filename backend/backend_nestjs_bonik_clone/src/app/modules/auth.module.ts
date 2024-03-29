import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth.controller';
import { LocalStrategy } from '../services/local.strategy';
import { jwtConstants } from 'src/common/constants/auth.constant';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../services/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '12d' },
    }),
  ],
})
export class AuthModule {}
