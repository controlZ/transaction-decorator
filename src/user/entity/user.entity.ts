import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Point } from '../../point/entity/point.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_uuid: string;

  @Column()
  user_name: string;

  @Column()
  user_phone_number: string;

  @OneToMany(() => Point, (point) => point.user)
  points: Point[];
}
