import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception-filter/http-exception.filter';
import { TypeormExceptionFilter } from './exception-filter/typeorm-exception.filter';
import { ShortLinkInterceptor } from './interceptor/short-link.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['authorization', 'content-type', 'x-admin-token'],
  });

  // const server = app.getHttpServer();
  // const router = server._events.request._router;
  // console.log(server, router, expressListRoutes({}, 'API:', router));
  //        |<----------------------------|                 |
  // client | middleware -> guard -> interceptor -> pipe -> | controller
  //        |                             |---------------> |

  // register interceptor
  app.useGlobalInterceptors(new ShortLinkInterceptor());

  // rigister exception filters
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new TypeormExceptionFilter());

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await app.listen(require('./config/configuration').default().port);
}
bootstrap();
