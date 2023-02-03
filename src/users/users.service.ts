import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { USER_REPOSITORY } from 'src/commons/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: typeof User,
  ) {}
  private readonly users: User[] = [];

  getUser(userId: string): User {
    const user: User = this.users.find((user) => user.id === userId);
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async signupUser(user: User): Promise<User> {
    return this.usersRepository.create({ ...user });
  }
}
