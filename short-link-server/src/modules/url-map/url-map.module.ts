import { UrlMapService } from './url-map.service';
import { UrlMapController } from './url-map.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UrlMapController],
  providers: [UrlMapService],
})
export class UrlMapModule {}
