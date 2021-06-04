import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkModule } from './modules/link/link.module';
import { AppController } from './app.controller';

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
    LinkModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
