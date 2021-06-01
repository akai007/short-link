import { LinkMapService } from './link-map.service';
import { LinkMapController } from './link-map.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [LinkMapController],
  providers: [LinkMapService],
})
export class UrlMapModule {}
