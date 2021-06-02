import { LinkMappingService } from './link-mapping.service';
import { LinkMappingController } from './link-mapping.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkMapping } from 'src/entity/link-mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkMapping])],
  controllers: [LinkMappingController],
  providers: [LinkMappingService],
})
export class LinkMappingModule {}
