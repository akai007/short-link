import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { ResponseResult } from '../dto/response-result.dto';
import { ValidationException } from '../exception/validation.exception';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();

    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg = exception.message;
    const code = exception.getCode ? exception.getCode() : '';

    console.log(exception.constructor.name, 'exception.constructor.name');

    if (exception.constructor.name === ValidationException.name) {
      const validationException: ValidationException = exception;
      response.status(status).json(validationException.getResponseResult());
    } else {
      response
        .status(status)
        .json(new ResponseResult(code.toString(), msg, {}));
    }
  }
}
