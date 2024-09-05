import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import UserDTO from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(data: UserDTO) {
    try {
      const user = await this.prisma.user.create({
        data,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async findOne(email: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async findAll(data: UserDTO) {
    try {
      const user = await this.prisma.user.findMany({});
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
