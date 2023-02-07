import { isEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {

    @IsNotEmpty()
    @IsNumber()
    userId:number;
    @IsNotEmpty()
    @IsNumber()
    postId:number;
    @IsNotEmpty()
    @IsString()
    content:string;
}
