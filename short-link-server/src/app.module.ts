import { UrlMapModule } from './modules/url-map/url-map.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UrlMapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
