import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

/**
 * TODO: Can't get this to work, see https://github.com/jaequery/ult-stack/issues/1
 */
@Catch()
export class TrpcExceptionFilter extends BaseExceptionFilter {
  catch() {
    console.log('hello error');
    // super.catch(exception, host);
  }
}
