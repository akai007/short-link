import { Controller, Get } from '@nestjs/common';
import { UrlMapService } from './url-map.service';

@Controller('url-map')
export class UrlMapController {
  constructor(private readonly urlMapService: UrlMapService) {}

  @Get()
  findAll(): { a: string } {
    return this.urlMapService.findAll();
  }
}
