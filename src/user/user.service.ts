import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/user.dto';
import { PointRepository } from '../point/point.repository';
import { Transactional } from '../global/transaction/transaction.decorator';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly pointRepository: PointRepository,
  ) {}

  @Transactional()
  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findUser(
      createUserDto.user_phone_number,
    );

    if (!user) {
      const createUser = await this.userRepository.createUser(createUserDto);

      await this.pointRepository.createRegisterPoint(createUser);

      return { createUser, message: 'new user' };
    }
    return { user, message: 'already exist user' };
  }
}
