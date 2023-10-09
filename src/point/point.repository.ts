import { Inject, Injectable } from '@nestjs/common';
import { Point } from './entity/point.entity';
import { User } from '../user/entity/user.entity';
import { TransactionHelper } from '../global/transaction/transaction.manager';

@Injectable()
export class PointRepository {
  constructor(
    @Inject(TransactionHelper) private readonly txManger: TransactionHelper,
  ) {}

  async createRegisterPoint(user: User): Promise<void> {
    const point = new Point();

    point.user = user;
    point.point = 1000;
    point.point_reason = 'REGISTER POINT';

    await this.txManger.getEntityManager().save(point);
  }
}
