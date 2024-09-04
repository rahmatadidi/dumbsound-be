import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Injectable,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import UserDTO from './dto/user.dto';

@Controller('users')
@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    data: UserDTO,
  ) {
    return this.userService.createUser(data);
  }
  @Get()
  async getUser(
    @Body()
    data: UserDTO,
  ) {
    return this.userService.findAll(data);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = this.userService.findOne(id);
    return data;
  }
}
