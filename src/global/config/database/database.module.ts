import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLConfigService } from './database.service';

@Module({
  imports: [ConfigModule],
  providers: [MySQLConfigService],
})
export class MySQLConfigModule {}
