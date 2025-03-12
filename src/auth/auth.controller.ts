import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import { UserResponse } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from 'src/common/guards/AuthGuard';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getProfile(@Req() req: Request): Promise<UserResponse> {
    console.log('requestuser=', req['user']);
    return this.userService.findOne(req['user'].userId);
  }

  @Put('me')
  @UseGuards(AuthGuard)
  async updateProfile(
    @Req() req: Request,
    @Body() body: UpdateUserDto,
  ): Promise<UserResponse> {
    return this.userService.update(req['user'].userId, body);
  }

  @Post('signup')
  async signup(@Body() body: SignupUserDto) {
    const { email, name, password } = body;
    console.log('signup');
    console.log('body=', body);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return await this.authService.signup(email, name, password);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginUserDto, @Res() res: Response) {
    const { email, password } = body;
    const { accessToken, refreshToken } = await this.authService.login(
      email,
      password,
    );

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      // secure: true,
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      // secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.send({ message: 'Logged in successfully' });
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies.refreshToken;

    console.log('refreshtoken=', refreshToken);
    const { accessToken, refreshToken: newRefreshToken } =
      await this.authService.refresh(refreshToken);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      // secure: true,
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      // secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.send({ message: 'Token refreshed' });
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res() res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.send({ message: 'Logged out successfully' });
  }
}
