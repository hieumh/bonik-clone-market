import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async findOne(email: string): Promise<User | null> {
    return this.prismaClient.iUser.findFirst({
      where: {
        email,
      },
    });
  }

  async findOneById(id: number): Promise<User | null> {
    return this.prismaClient.iUser.findFirst({
      where: {
        userId: id,
      },
    });
  }

  async create(user: User): Promise<User> {
    return this.prismaClient.iUser.create({
      data: user,
    });
  }
}
