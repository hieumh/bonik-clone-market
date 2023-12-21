import {
  Request,
  Body,
  Controller,
  Post,
  UseGuards,
  Response,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../models/user.model';
import { UserDto } from '../dtos/user.dto';
import { AuthService } from '../services/auth.service';
import { IRegister } from 'src/common/interfaces/login.interface';
import { mapper } from 'src/mapping/mapper';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../services/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req, @Response() res): Promise<UserDto> {
    await this.authService.login(req.user, res);

    const userInformation = await this.userService.findOne(req.user?.email);
    const responseUser = mapper.map(userInformation, User, UserDto);

    return res.status(HttpStatus.OK).send(responseUser);
  }

  @Post('register')
  async register(@Body() user: IRegister): Promise<UserDto> {
    const newUser = await this.authService.register(user);
    const responseUser = mapper.map(newUser, User, UserDto);

    return responseUser;
  }

  @Post('refresh-token')
  async refreshToken(@Request() req, @Response() res): Promise<string> {
    const cookies = req.cookies;

    if (!cookies || !cookies['refreshToken']) {
      throw new UnauthorizedException();
    }

    const refreshToken = cookies['refreshToken'];
    await this.authService.refreshToken(refreshToken, res);

    return res.status(HttpStatus.OK).send('ok');
  }
}
