import { Entity, Column, Index } from 'typeorm';
import { Length } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity()
@Index(['protocol', 'domain'], { unique: true })
export class LinkGroup extends BaseEntity {
  @Column({ length: 64, default: '', comment: '链接域名' })
  @Length(4, 64)
  domain: string;

  @Column({ length: 8, default: 'http', comment: '协议 https / http' })
  protocol: string;

  @Column({ type: 'tinyint', width: 1, default: 1, comment: 'URL状态,1:正常,2:已失效' })
  domainStatus: number;
}
