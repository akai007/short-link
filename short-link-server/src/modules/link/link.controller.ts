import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { LinkService } from './link.service';

@Controller('link-mapping')
export class LinkController {
  constructor(private readonly urlMapService: LinkService) {}

  @Get()
  async findAll() {
    return await this.urlMapService.findAll();
  }

  @Post('add')
  async add(@Body() Link) {
    return await this.urlMapService.insert(Link);
  }
}
