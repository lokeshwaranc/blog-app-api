import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum EMOTION_TYPE {
    LOVE = "LOVE",
    CLAP = "CLAP",
    THUMBS_UP = "THUMBS_UP",
    THUMBS_DOWN = "THUMBS_DOWN",
  }
export class CreatePostEmotionDto {

    @IsNotEmpty()
    @IsNumber()
    userId:number;

    @IsNotEmpty()
    @IsNumber()
    postId:number;
    
    @IsEnum(EMOTION_TYPE)
    @IsNotEmpty()
    @IsString()
    emotion:EMOTION_TYPE;
}
