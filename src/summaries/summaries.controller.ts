import { Controller, Get } from '@nestjs/common';
import { SummariesService } from './summaries.service';

@Controller('summary')
export class SummariesController {
  constructor(private readonly cardsService: SummariesService) {}

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }
}
