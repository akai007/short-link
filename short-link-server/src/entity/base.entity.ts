import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({ name: 'create_time', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time', comment: '更新时间' })
  updateTime: Date;

  @Column({ length: 32, default: 'admin', comment: '创建人' })
  creator: string;

  @Column({ length: 32, default: 'admin', comment: '修改人' })
  editor: string;

  @Column({ default: false, comment: '是否禁用' })
  ban: boolean;
}
