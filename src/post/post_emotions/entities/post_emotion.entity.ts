import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/users/user.entity";

enum EMOTION_TYPE {
    LOVE = "LOVE",
    CLAP = "CLAP",
    THUMBS_UP = "THUMBS_UP",
    THUMBS_DOWN = "THUMBS_DOWN",
  }

@Table(
    {
        timestamps: false,
    }
)
export class PostEmotion extends Model<PostEmotion> {

    @Column({
        type: DataType.ENUM(...Object.values(EMOTION_TYPE)),
        allowNull: false,
    })
      emotion: EMOTION_TYPE;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
      userId:number;  

    @ForeignKey(() => Post)
    @Column({
          type: DataType.INTEGER,
          allowNull: false,
    })
      postId:number;    
}
