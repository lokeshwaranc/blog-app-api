import { Post } from '../post/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber: string;

  @HasMany(()=>Post)
  posts:Post[]

  @HasMany(()=>Comment)
  Comments:Comment[]
}
