import { Body, Controller, Get, Post } from '@nestjs/common';
import { LinkMappingService } from './link-mapping.service';

@Controller('link-mapping')
export class LinkMappingController {
  constructor(private readonly urlMapService: LinkMappingService) {}

  @Get()
  async findAll() {
    return await this.urlMapService.findAll();
  }

  @Post('add')
  async add(@Body() linkMapping) {
    console.log(linkMapping, 'linkMapping');

    return await this.urlMapService.insert(linkMapping);
  }
}
