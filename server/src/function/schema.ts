import {
  Provide,
  Inject,
  // ServerlessTrigger,
  // ServerlessTriggerType,
  // Query,
  Body,
  Controller,
  Headers,
  Get,
  Post,
  ALL
} from '@midwayjs/decorator';
import { Validate } from "@midwayjs/validate";
import { Context } from '@midwayjs/faas';
import { AuthenticationClient } from 'authing-js-sdk'
import { SchemaService } from '../service/schema';
import { SchemaDTO } from '../dto/schema';
import { getStandardResponse } from '../util/common';
import { ErrorMiddleware } from '../middleware/error.middleware';

@Provide()
@Controller('/api/schema', { middleware: [ErrorMiddleware] })
export class BlogHTTPService {
  @Inject()
  ctx: Context;

  @Inject()
  schemaService: SchemaService

  // // 可以使用触发器来定义接口
  // @ServerlessTrigger(ServerlessTriggerType.HTTP, {
  //   path: '/',
  //   method: 'get',
  // })
  // async handleHTTPEvent(@Query() queryData) {
  //   return `Hello ${queryData.name}`;
  // }
  // 也可以直接使用这种装饰器，这时要在外层使用Controller装饰器
  @Get('/getLast')
  async get() {
    const result = await this.schemaService.getLast();
    return getStandardResponse(0, result);
  }

  @Post('/save')
  @Validate()
  async save(@Body(ALL) schemaData: SchemaDTO, @Headers('token') token: string) {
    const authing = new AuthenticationClient({
      appId: '6216384893f54146ce8ea0ef',
      appHost: 'https://maikpaadafck-demo.authing.cn',
      token
    })
    const { username } = await authing.getCurrentUser();
    if (username !== 'man') {
      return getStandardResponse(1, null, '您没有此权限');
    }
    const result = await this.schemaService.save(schemaData.schema);
    return getStandardResponse(0, result, '保存成功');
  }
}
