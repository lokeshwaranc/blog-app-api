import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './users.service';
import { ResponseTransformInterceptor } from 'src/commons/interceptor/response_transform.interceptor';
import { User } from './user.entity';
import { UserLoginDto } from './dto/UserLogin.dto';

@Controller('users')
@UseInterceptors(ResponseTransformInterceptor)
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  async findUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async findUser(@Param('id') paramsId: string): Promise<User> {
    return this.userService.getUser(paramsId);
  }

  @Post('/sign_up')
  async signupUser(@Body() user: UserDto) {
    return this.userService.signupUser(user);
  }

  @Post('/sign_in')
  async signinUser(@Body() user: UserLoginDto) {
    return this.userService.signInUser(user);
  }

  @Delete('/:id')
  deleteUser(@Body() user: object) {
    return user;
  }
}
