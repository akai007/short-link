import { Body, Controller, Get, Post } from '@nestjs/common';
import { Link } from 'src/entity/link.entity';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  async findAll() {
    return await this.linkService.findAll();
  }

  @Post('add')
  async add(@Body() link: Link) {
    return await this.linkService.insert(link);
  }
}
