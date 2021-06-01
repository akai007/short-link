import { Injectable } from '@nestjs/common';

@Injectable()
export class LinkMapService {
  findAll(): { a: string } {
    return { a: 'abcaaa' };
  }
}
