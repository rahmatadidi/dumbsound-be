import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import UserDTO from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(data: UserDTO) {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }
  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
  async findAll(data: UserDTO) {
    const user = await this.prisma.user.findMany({});
    return user;
  }
}
