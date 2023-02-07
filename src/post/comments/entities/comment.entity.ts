import { Post } from "../../entities/post.entity";

import { Column, DataType, ForeignKey,BelongsTo, Table ,Model} from "sequelize-typescript";
import { User } from "src/users/user.entity";

@Table(
    {
        timestamps: false,
    }
)
export class Comment extends Model<Comment>{

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
      content: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
      userId:number;  

    @BelongsTo(()=>User)
      userComment:User;  

    @ForeignKey(() => Post)
    @Column({
          type: DataType.INTEGER,
          allowNull: false,
    })
      postId:number;   
      
    @BelongsTo(()=>Post)
    postComment:Post; 
}

