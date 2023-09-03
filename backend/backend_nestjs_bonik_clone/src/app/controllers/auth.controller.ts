import { Request, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '../models/user.model';
import { UserDto } from '../dtos/user.dto';
import { AuthService } from '../services/auth.service';
import { IRegister } from 'src/common/interfaces/login.interface';
import { mapper } from 'src/mapping/mapper';
import { AuthGuard } from '@nestjs/passport';
import { ITokenResponse } from 'src/common/interfaces/common.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req): Promise<ITokenResponse> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() user: IRegister): Promise<UserDto> {
    const newUser = await this.authService.register(user);
    const responseUser = mapper.map(newUser, User, UserDto);

    return responseUser;
  }

  @Post('refresh-token')
  async refreshToken(
    @Body() tokenCombine: ITokenResponse,
  ): Promise<ITokenResponse> {
    return this.authService.refreshToken(tokenCombine);
  }
}
