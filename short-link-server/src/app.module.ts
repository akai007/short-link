import { UrlMapModule } from './modules/url-map/url-map.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration'
import * as path from 'path'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
        useFactory: (config: ConfigService): TypeOrmModuleOptions => config.get('ormconfig'),
        inject: [ConfigService],
    }),
    UrlMapModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
