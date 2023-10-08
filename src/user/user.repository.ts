import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserRepository {
  async createUser(entityManager: EntityManager) {
    const user = new User();
  }
}
