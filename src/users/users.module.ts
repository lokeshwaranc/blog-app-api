import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { usersProviders } from './users.provider';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { JwtActionsService } from './jwt.service';

@Module({
  imports:[PassportModule],
  controllers: [UsersController],
  providers: [UserService, ...usersProviders,JwtService,JwtActionsService],
  exports:[UserService]
})
export class UserModule {}
