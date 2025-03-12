import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export interface JwtPayload {
  id: string;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('AUTHGUARD');
    const request = context.switchToHttp().getRequest<Request>();
    const accessToken = request.cookies?.accessToken;

    if (!accessToken) {
      console.log('token1=', accessToken);
      throw new UnauthorizedException('Access token is missing');
    }
    console.log('token2=', accessToken);
    try {
      const payload: JwtPayload = await this.jwtService.verifyAsync(
        accessToken,
        {
          secret: this.configService.get<string>('JWT_SECRET_KEY'),
        },
      );
      console.log('payload=', payload);
      request['user'] = payload;
    } catch {
      console.error('errorauthguard');
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
