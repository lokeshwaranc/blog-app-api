import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { COMMENT_REPOSITORY } from 'src/commons/constants';
import { Post } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/users/users.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  constructor(@Inject(COMMENT_REPOSITORY)
  private readonly commentRepository: typeof Comment,
  private postService:PostService,
  private userService:UserService
  ){}

  async commentExist(id){
    let comment = await this.commentRepository.findByPk(id);
    if(comment == null){
      throw new HttpException('Comment does not exist', HttpStatus.NOT_FOUND);
    }
    return comment;
  }

  async create(createCommentDto: CreateCommentDto) {
    await this.postService.postExist(createCommentDto.postId);
    await this.userService.userExist(createCommentDto.userId);
    return this.commentRepository.create(createCommentDto);
  }

  async remove(id: number) {
    await this.commentExist(id);
    await this.commentRepository.destroy({where:{id:id}});
    return 'comment deleted';
  }
}
