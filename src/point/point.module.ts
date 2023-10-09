import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointController } from './point.controller';
import { PointRepository } from './point.repository';
import { TransactionHelper } from '../global/transaction/transaction.manager';

@Module({
  providers: [PointService, PointRepository, TransactionHelper],
  controllers: [PointController],
})
export class PointModule {}
