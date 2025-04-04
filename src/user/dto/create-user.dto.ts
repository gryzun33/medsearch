import { IsDefined, IsString } from 'class-validator';

export class CreateUserDto {
  @IsDefined({ message: 'Email is required' })
  @IsString({ message: 'Email should be string' })
  email: string;

  @IsDefined({ message: 'Name is required' })
  @IsString({ message: 'Name should be string' })
  name: string;

  @IsDefined({ message: 'Password is required' })
  @IsString({ message: 'Password should be string' })
  password: string;
}
