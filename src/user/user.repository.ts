import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { TransactionHelper } from '../global/transaction/transaction.manager';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(TransactionHelper) private readonly txManger: TransactionHelper,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.user_name = createUserDto.user_name;
    user.user_phone_number = createUserDto.user_phone_number;

    await this.txManger.getEntityManager().save(user);

    return user;
  }

  async findUser(userPhoneNumber: string): Promise<User | null> {
    return await this.txManger.getEntityManager().findOne(User, {
      where: { user_phone_number: userPhoneNumber },
    });
  }
}
