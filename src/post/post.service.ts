import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { POST_REPOSITORY, USER_REPOSITORY } from 'src/commons/constants';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/users.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Comment  } from './comments/entities/comment.entity';
@Injectable()
export class PostService {

  constructor(@Inject(POST_REPOSITORY)
  private readonly postRepository: typeof Post,private readonly userService:UserService){

  }


  async postExist(id:number):Promise<Post>{
    let post = await this.postRepository.findByPk(id,{
      include:[
        {
          model:User,
          as:"postUser",
          attributes:[
            'firstName'
          ]
        },
        {
          model:Comment,
          as:"Comments"
        }
      ]
    });
    if(post == null){
      throw new HttpException('Post does not exist', HttpStatus.NOT_FOUND);
    }
    return post;
  }

  async create(createPostDto: CreatePostDto) {
    await this.userService.userExist(createPostDto.userId);
    let post  =  await this.postRepository.create(createPostDto);
    return post;
  }

  async findOne(id: number) :Promise<Post>{
    return  await this.postExist(id);
  }

  async update(updatePostDto: UpdatePostDto) {
    await this.postExist(updatePostDto.postId);
    let newPost = {
      title:updatePostDto.title,
      content:updatePostDto.content
    }
    return  await this.postRepository.update(newPost , {where:{id:updatePostDto.postId}})
  }

  async remove(id: number) {
    await this.postExist(id)
    this.postRepository.destroy({where:{id:id}});
    return 'post deleted'
  }
}
