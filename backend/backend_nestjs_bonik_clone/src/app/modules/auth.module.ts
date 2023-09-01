import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth.controller';
import { LocalStrategy } from '../services/local.strategy';
import { jwtConstants } from 'src/common/constants/auth.constant';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
