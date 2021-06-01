import { Injectable } from '@nestjs/common';

@Injectable()
export class LinkMappingService {
  findAll(): { a: string } {
    return { a: 'abcaaa' };
  }
}
