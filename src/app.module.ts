import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummariesModule } from './summaries/summaries.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [SummariesModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
