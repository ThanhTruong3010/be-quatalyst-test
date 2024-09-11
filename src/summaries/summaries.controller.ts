import { Controller, Get } from '@nestjs/common';
import { SummariesService } from './summaries.service';

@Controller('summary')
export class SummariesController {
  constructor(private readonly summariesService: SummariesService) {}

  @Get()
  findAll() {
    return this.summariesService.findAll();
  }
}
