import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkMapping } from 'src/entity/link-mapping.entity';
import { Repository } from 'typeorm';
import { v5 as uuidv5 } from 'uuid';
@Injectable()
export class LinkMappingService {
  constructor(@InjectRepository(LinkMapping) private readonly linkMappingRepository: Repository<LinkMapping>) {}

  async findAll(): Promise<LinkMapping[]> {
    return await this.linkMappingRepository.find();
  }

  async insert(linkMapping: LinkMapping): Promise<LinkMapping> {
    const insertObj = new LinkMapping();
    insertObj.rawUrl = linkMapping.rawUrl;

    console.log(linkMapping, 'linkMapping', new URL(linkMapping.rawUrl));

    const rawUrlObj = new URL(linkMapping.rawUrl);
    const urlDomain = `${rawUrlObj.protocol}//:${rawUrlObj.host}`;
    const compressCode = uuidv5(urlDomain, uuidv5.URL);
    const shortUrl = `${urlDomain}/${compressCode}`;

    console.log(shortUrl, rawUrlObj, urlDomain, compressCode);
    return insertObj;
    // return await this.linkMappingRepository.save(linkMapping);
  }
}
