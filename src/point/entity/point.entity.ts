import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';

@Entity()
export class Point {
  @PrimaryGeneratedColumn('uuid')
  point_uuid: string;

  @Column()
  point: number;

  @Column()
  point_reason: string;

  @ManyToOne(() => User, (user) => user.points)
  user: User;
}
