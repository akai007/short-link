import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { ResponseResult } from '../dto/response-result.dto';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class TypeormExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();
    // TODO 打印日志

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(new ResponseResult(exception.errno, exception.message, exception)); // TODO 不要暴露内部信息
  }
}
