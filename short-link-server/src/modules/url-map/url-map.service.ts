import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlMapService {
  findAll(): { a: string } {
    return { a: 'abcaaa' };
  }
}
