import { UrlMapModule } from './modules/url-map/url-map.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<any>) => {
        return configService.get('database');
      },
      inject: [ConfigService],
    }),
    UrlMapModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
