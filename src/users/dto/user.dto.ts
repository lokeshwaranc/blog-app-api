import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { IsEmail } from "sequelize-typescript";

export class UserDto {

   @IsString()
   @IsNotEmpty()
   firstName: string;

   @IsString()
   @IsNotEmpty()
   email: string;

   @IsString()
   @IsNotEmpty()
   password: string;


   @IsString()
   @IsNotEmpty()
   lastName:string;

   @IsString()
   @IsNotEmpty()
   @MinLength(10)
   phoneNumber: string;
}
