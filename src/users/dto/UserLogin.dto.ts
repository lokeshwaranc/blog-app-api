import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { IsEmail } from "sequelize-typescript";

export class UserLoginDto {

   @IsString()
   @IsNotEmpty()
   email: string;

   @IsString()
   @IsNotEmpty()
   password: string;
}
