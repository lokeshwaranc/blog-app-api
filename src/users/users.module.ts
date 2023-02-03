import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { usersProviders } from './users.provider';

@Module({
  controllers: [UsersController],
  providers: [UserService, ...usersProviders],
})
export class UserModule {}
