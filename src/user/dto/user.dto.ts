import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  user_name: string;

  @IsString()
  user_phone_number: string;
}
