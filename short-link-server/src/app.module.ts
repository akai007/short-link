import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkMappingModule } from './modules/link-mapping/link-mapping.module';

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
    LinkMappingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
