import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { UserLoginDto } from "./dto/UserLogin.dto";
dotenv.config();
@Injectable()
export class JwtActionsService{

    constructor(private jwtService: JwtService){}


    async hashPassword(password) : Promise<string>{
       const saltOrRounds = await bcrypt.genSalt();
       return await bcrypt.hash(password, saltOrRounds);
    }

    async generateJwt(requestData:UserLoginDto,dbData:any):Promise<string>{
       const isMatch = await bcrypt.compare(requestData.password, dbData.password);
       if(!isMatch) throw new HttpException('Wrong Password', HttpStatus.NOT_FOUND);
       return this.jwtService.sign({email:requestData.email},{secret:process.env.SECRET})
    }

}