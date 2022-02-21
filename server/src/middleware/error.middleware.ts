// import { IMiddleware } from '@midwayjs/core';
import { Middleware, ScopeEnum, Scope } from '@midwayjs/decorator';
// import { NextFunction, Context } from '@midwayjs/koa';
import { FaaSContext } from '@midwayjs/faas';
import { getStandardResponse } from '../util/common';

@Middleware()
@Scope(ScopeEnum.Singleton)
export class ErrorMiddleware {
  resolve() {
    return async (ctx: FaaSContext, next: () => Promise<any>) => {
      try {
        await next();
      } catch (error) {
        ctx.body = getStandardResponse(1, null, error.toString())
      }
    };
  }
}