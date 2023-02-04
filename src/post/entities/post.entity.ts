import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.entity";
import internal from "stream";

@Table(
    {
        timestamps: false

    }
)
export class Post extends Model<Post>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      title: string;
    

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
   
}