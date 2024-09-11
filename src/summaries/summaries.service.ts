import { Injectable } from '@nestjs/common';
import { SUMMARY } from './mocks/summaries';

@Injectable()
export class SummariesService {
  summary = SUMMARY;

  findAll() {
    return new Promise((resolve) => {
      resolve(this.summary);
    });
  }
}
