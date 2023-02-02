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
  signupUser(@Body() user: SignupUserDTO) {
    return this.userService.signupUser(user);
  }

  @Put('/:id')
  updateUser(@Body() signupUserDTO: SignupUserDTO) {
    return signupUserDTO;
  }

  @Delete('/:id')
  deleteUser(@Body() signupUserDTO: SignupUserDTO) {
    return signupUserDTO;
  }
}
