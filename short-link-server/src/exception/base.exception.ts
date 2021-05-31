import { HttpException } from '@nestjs/common';
import { ResponseResult } from '../dto/response-result.dto';

export class BaseException extends HttpException {
  constructor(private responseResult: ResponseResult<any>, httpStatus: number) {
    super(responseResult.getMsg(), httpStatus);
  }

  getCode() {
    return this.responseResult.getCode();
  }
  getResponseResult() {
    return this.responseResult;
  }
}
