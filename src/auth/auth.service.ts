import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserResponse } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(
    email: string,
    name: string,
    password: string,
  ): Promise<UserResponse> {
    const hashedPassword = await this.hashPassword(password);
    const createUserDto = {
      email,
      name,
      password: hashedPassword,
    };

    return this.userService.create(createUserDto);
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new ForbiddenException('Authentication failed');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ForbiddenException('Authentication failed');
    }

    const accessToken = this.generateAccessToken(user.id);
    const refreshToken = this.generateRefreshToken(user.id);

    return { accessToken, refreshToken };
  }

  generateAccessToken(userId: string): string {
    const secret = this.configService.get<string>('JWT_SECRET_KEY');
    const expiresIn = this.configService.get<string>('TOKEN_EXPIRE_TIME');

    return this.jwtService.sign({ userId }, { secret, expiresIn });
  }

  generateRefreshToken(userId: string): string {
    const refreshSecret = this.configService.get<string>(
      'JWT_SECRET_REFRESH_KEY',
    );
    const expiresIn = this.configService.get<string>(
      'TOKEN_REFRESH_EXPIRE_TIME',
    );

    return this.jwtService.sign(
      { userId },
      { secret: refreshSecret, expiresIn },
    );
  }

  async refresh(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is required');
    }

    try {
      const decoded = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_SECRET_REFRESH_KEY'),
      });

      const user = { id: decoded.userId };

      const newAccessToken = this.generateAccessToken(user.id);
      const newRefreshToken = this.generateRefreshToken(user.id);

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error) {
      throw new ForbiddenException('Refresh token is invalid or expired');
    }
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = this.configService.get<number>('CRYPT_SALT');
    const salt = await bcrypt.genSalt(Number(saltRounds));
    return await bcrypt.hash(password, salt);
  }
}
