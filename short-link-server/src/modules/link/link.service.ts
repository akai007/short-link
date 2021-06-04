import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from 'src/entity/link.entity';
import { Connection, Repository } from 'typeorm';
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
export class LinkService {
  constructor(private connection: Connection, @InjectRepository(Link) private readonly LinkRepository: Repository<Link>, private readonly configService: ConfigService) {}

  async findAll(): Promise<Link[]> {
    return await this.LinkRepository.find();
  }

  async insert(link: Link): Promise<Link> {
    const runner = this.connection.createQueryRunner();
    await runner.connect();
    await runner.startTransaction();
    try {
      let insertObj = new Link();
      const compressCode = getShortUUID(link.rawUrl);
      const DOMAIN = this.configService.get('shortLink').host;

      const shortUrl = `${DOMAIN}/${compressCode}`;

      insertObj.rawUrl = link.rawUrl;
      insertObj.shortUrl = shortUrl;

      insertObj = await runner.manager.save(insertObj);

      await runner.commitTransaction();
      return insertObj;
    } catch (err) {
      await runner.rollbackTransaction();
      throw err;
    } finally {
      await runner.release();
    }
  }
}
