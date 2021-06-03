import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkMapping } from 'src/entity/link-mapping.entity';
import { Repository } from 'typeorm';
import { v5 as uuidv5 } from 'uuid';
function getShortUUID(domain: string) {
  const SHORT_ARRAY = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
  let uid = uuidv5(domain, uuidv5.URL);
  uid = uid.replace(/-/g, '');
  const buffer = [];
  for (let i = 0; i < 8; i++) {
    const start = i * 4;
    const end = i * 4 + 4;
    const str = uid.substring(start, end);
    buffer.push(SHORT_ARRAY[parseInt(str, 16) % 64]);
  }
  return buffer.join('');
}

@Injectable()
export class LinkMappingService {
  constructor(@InjectRepository(LinkMapping) private readonly linkMappingRepository: Repository<LinkMapping>) {}

  async findAll(): Promise<LinkMapping[]> {
    return await this.linkMappingRepository.find();
  }

  async insert(linkMapping: LinkMapping): Promise<LinkMapping> {
    const insertObj = new LinkMapping();

    // const rawUrlObj = new URL(linkMapping.rawUrl);
    // const urlDomain = `${rawUrlObj.protocol}//:${rawUrlObj.host}`;
    const compressCode = getShortUUID(linkMapping.rawUrl);
    const DOMAIN = 'http://localhost';
    const shortUrl = `${DOMAIN}/${compressCode}`;

    insertObj.rawUrl = linkMapping.rawUrl;
    insertObj.shortUrl = shortUrl;

    // return insertObj;
    return await this.linkMappingRepository.save(linkMapping);
  }
}
