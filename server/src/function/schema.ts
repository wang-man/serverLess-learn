import {
  Provide,
  Inject,
  // ServerlessTrigger,
  // ServerlessTriggerType,
  // Query,
  Body,
  Controller,
  Get,
  Post,
  ALL
} from '@midwayjs/decorator';
import { Validate } from "@midwayjs/validate";
import { Context } from '@midwayjs/faas';
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
  async save(@Body(ALL) schemaData: SchemaDTO) {
    const result = await this.schemaService.save(schemaData.schema);
    return getStandardResponse(0, result);
  }
}
