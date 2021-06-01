import { Controller, Get } from '@nestjs/common';
import { LinkMapService } from './link-map.service';

@Controller('link-map')
export class LinkMapController {
  constructor(private readonly urlMapService: LinkMapService) {}

  @Get()
  findAll(): { a: string } {
    return this.urlMapService.findAll();
  }
}
