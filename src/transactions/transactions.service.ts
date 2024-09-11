import { Injectable } from '@nestjs/common';
import { TRANSACTION_MOCK } from './mocks/transaction';

@Injectable()
export class TransactionsService {
  transaction = TRANSACTION_MOCK;

  findAll() {
    return new Promise((resolve) => {
      resolve(this.transaction);
    });
  }
}
