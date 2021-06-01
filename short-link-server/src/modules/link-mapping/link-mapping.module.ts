import { LinkMappingService } from './link-mapping.service';
import { LinkMappingController } from './link-mapping.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [LinkMappingController],
  providers: [LinkMappingService],
})
export class UrlMapModule {}
