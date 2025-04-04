import { IsDefined, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsDefined({ message: 'Name is required' })
  @IsString({ message: 'Name should be string' })
  name: string;
}
