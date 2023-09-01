import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from '../models/user.model';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async findOne(username: string): Promise<User> {
    return this.prismaClient.iUser.findFirst({
      where: {
        username,
      },
    });
  }

  async create(user: User): Promise<User> {
    return this.prismaClient.iUser.create({
      data: user,
    });
  }
}
