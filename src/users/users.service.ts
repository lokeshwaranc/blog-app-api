import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { SignupUserDTO } from './dto/sign-up_users.dto';
@Injectable()
export class UserService {
  private readonly users: User[] = [];

  getUser(userId: string): User {
    const user: User = this.users.find((user) => user.id === userId);
    return user;
  }

  getUsers(): User[] {
    return this.users;
  }

  signupUser(user: SignupUserDTO): User[] {
    this.users.push({ ...user, id: '1' });
    return this.users;
  }
}
