import { Injectable } from '@nestjs/common';
import { SUMMARY } from './mocks/cards';

@Injectable()
export class SummariesService {
  summary = SUMMARY;

  findAll() {
    return new Promise((resolve) => {
      resolve(this.summary);
    });
  }
}
