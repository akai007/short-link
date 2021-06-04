import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
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
    return await this.urlMapService.insert(linkMapping);
  }
}
