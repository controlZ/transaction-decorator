import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PointRepository } from '../point/point.repository';
import { TransactionMiddleware } from '../global/transaction/transaction.middleware';
import { TransactionHelper } from '../global/transaction/transaction.manager';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    PointRepository,
    TransactionMiddleware,
    TransactionHelper,
  ],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TransactionMiddleware).forRoutes(UserController);
  }
}
