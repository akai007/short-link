import { Controller, Get } from '@nestjs/common';
import { LinkMappingService } from './link-mapping.service';

@Controller('link-map')
export class LinkMappingController {
  constructor(private readonly urlMapService: LinkMappingService) {}

  @Get()
  findAll(): { a: string } {
    return this.urlMapService.findAll();
  }
}
