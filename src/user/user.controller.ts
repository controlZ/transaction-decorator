import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUserWithPoint(@Body() createUserDto: CreateUserDto) {
    return await this.userService.registerUser(createUserDto);
  }
}
