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
import { User } from './interfaces/user.interface';
import { SignupUserDTO } from './dto/sign-up_users.dto';
import { UserService } from './users.service';
import { ResponseTransformInterceptor } from 'src/commons/interceptor/response_transform.interceptor';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  @UseInterceptors(ResponseTransformInterceptor)
  async findUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  @UseInterceptors(ResponseTransformInterceptor)
  async findUser(@Param('id') paramsId: string): Promise<User> {
    return this.userService.getUser(paramsId);
  }

  @Post('/sign_up')
  @UseInterceptors(ResponseTransformInterceptor)
  signupUser(@Body() user: SignupUserDTO) {
    return this.userService.signupUser(user);
  }

  @Put('/:id')
  @UseInterceptors(ResponseTransformInterceptor)
  updateUser(@Body() signupUserDTO: SignupUserDTO) {
    return signupUserDTO;
  }

  @Delete('/:id')
  @UseInterceptors(ResponseTransformInterceptor)
  deleteUser(@Body() signupUserDTO: SignupUserDTO) {
    return signupUserDTO;
  }
}
