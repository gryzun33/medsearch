import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordData, UserLogin } from './entities/user.entity';
// import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    try {
      const user = await this.prisma.user.create({
        data: {
          email: createUserDto.email,
          name: createUserDto.name,
          password: createUserDto.password,
        },
        omit: {
          password: true,
        },
      });
      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('A user with this email already exists.');
      }
      throw new Error(`Error with creating user: ${error.message}`);
    }
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    return this.prisma.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async findById(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User with such id is not found');
    }
    return user;
  }

  async findByIdWithPassword(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User with such id is not found');
    }
    return user;
  }

  async update(
    id: string,
    updateData: UpdateUserDto | UpdatePasswordData,
  ): Promise<Omit<User, 'password'>> {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateData,
      },
      omit: {
        password: true,
      },
    });
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw new Error(`Error during deleting user: ${error.message}`);
    }
  }

  async findUserByEmail(email: string): Promise<UserLogin | null> {
    return await this.prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
  }
}
