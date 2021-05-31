import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { CodeEnum, CodeEnumMap } from '../enum/code.enum';
import { ResponseResult } from '../dto/response-result.dto';

export class BaseServerException extends BaseException {
  constructor(code: number, msg: string) {
    code = code ? code : CodeEnum.FAIL;
    msg = msg ? msg : CodeEnumMap.get(CodeEnum.FAIL);
    super(new ResponseResult(code, msg, {}), HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
