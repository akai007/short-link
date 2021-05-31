import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { CodeEnum } from '../enum/code.enum';
import { ValidationError } from 'class-validator';
import { ResponseResult } from '../dto/response-result.dto';

export class ValidationException extends BaseException {
  constructor(validationErrors: ValidationError[]) {
    super(
      new ResponseResult(
        CodeEnum.INVALID_PARAMS,
        validationErrors.toString(),
        validationErrors,
      ),
      HttpStatus.FORBIDDEN,
    );
  }
}
