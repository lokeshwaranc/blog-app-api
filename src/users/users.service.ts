import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { USER_REPOSITORY } from 'src/commons/constants';
import * as dotenv from 'dotenv';
import { UserLoginDto } from './dto/UserLogin.dto';
dotenv.config();
import { JwtService } from '@nestjs/jwt';
import { JwtActionsService } from './jwt.service';
@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: typeof User,
    private jwtActionsService:JwtActionsService
  ) {}
  private readonly users: User[] = [];

  async userExist(userId:number):Promise<User>{
     const user = await this.usersRepository.findByPk(userId);
     if(user == null){
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
     }
     return user;
  }

  getUser(userId: string): User {
    const user: User = this.users.find((user) => user.id === userId);
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async signupUser(user: UserDto): Promise<User> {
    user.password = await this.jwtActionsService.hashPassword(user.password);
    return await this.usersRepository.create(user);
  }

  async getUserByEmail(emial:string): Promise<User>{
    const user = await this.usersRepository.findOne({where:{email:emial}});
    if(user == null) throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    return user;
  }

  async signInUser(user:UserLoginDto): Promise<string>{
    const userData =  await this.getUserByEmail(user.email);
    return this.jwtActionsService.generateJwt(user,userData);
  }
}
