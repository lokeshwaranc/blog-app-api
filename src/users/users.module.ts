import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { usersProviders } from './users.provider';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[PassportModule],
  controllers: [UsersController],
  providers: [UserService, ...usersProviders,JwtService],
  exports:[UserService]
})
export class UserModule {}
