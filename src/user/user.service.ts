import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UserRepository } from './user.repository';
import { UserLogin, UserResponse } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto): Promise<UserResponse> {
    return this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<UserResponse[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<UserResponse> {
    return this.userRepository.findById(id);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponse> {
    return this.userRepository.update(id, updateUserDto);
  }

  async updatePassword(
    id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<UserResponse> {
    return this.userRepository.update(id, updatePasswordDto);
  }

  async remove(id: string): Promise<void> {
    return this.userRepository.remove(id);
  }

  async findUserByEmail(email: string): Promise<UserLogin | null> {
    return this.userRepository.findUserByEmail(email);
  }
}
