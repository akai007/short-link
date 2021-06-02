import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkMapping } from 'src/entity/link-mapping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LinkMappingService {
  constructor(@InjectRepository(LinkMapping) private readonly linkMappingRepository: Repository<LinkMapping>) {}

  async findAll(): Promise<LinkMapping[]> {
    return await this.linkMappingRepository.find();
  }

  async insert(linkMapping: LinkMapping): Promise<LinkMapping> {
    const insertObj = new LinkMapping();
    insertObj.rawUrl = linkMapping.rawUrl;

    return await this.linkMappingRepository.save(linkMapping);
  }
}
