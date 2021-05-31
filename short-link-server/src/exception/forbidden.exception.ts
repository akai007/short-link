import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { CodeEnum, CodeEnumMap } from '../enum/code.enum';
import { ResponseResult } from '../dto/response-result.dto';

export class ForbiddenException extends BaseException {
  constructor() {
    super(
      new ResponseResult(
        CodeEnum.FORBIDDEN,
        CodeEnumMap.get(CodeEnum.FORBIDDEN),
        {},
      ),
      HttpStatus.FORBIDDEN,
    );
  }
}
