import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length, IsEmail, IsMobilePhone } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 80, default: '未命名' })
  @Length(4, 80)
  nickname: string;

  @Column({ length: 40, default: '' })
  @Length(11, 14)
  @IsMobilePhone('zh-CN')
  phone: string;

  @Column({ length: 80 })
  password: string;

  @Column({ length: 100 })
  @Length(10, 100)
  @IsEmail()
  email: string;
}
