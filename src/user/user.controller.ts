import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import UserDTO from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    data: UserDTO,
  ) {
    try {
      return this.userService.createUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  @Get()
  async getUser(
    @Body()
    data: UserDTO,
  ) {
    try {
      return this.userService.findAll(data);
    } catch (error) {
      console.log(error);
    }
  }
  @Get(':email')
  async findOne(@Param('email') email: string) {
    try {
      const data = this.userService.findOne(email);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
