import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePostDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    postId:number;
    
}
