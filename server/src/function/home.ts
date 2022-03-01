import axios from 'axios';
import {
  Provide,
  Inject,
  Controller,
  Get,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { SchemaService } from '../service/schema';
import { ErrorMiddleware } from '../middleware/error.middleware';

@Provide()
@Controller('/', { middleware: [ErrorMiddleware] })
export class BlogRouterService {
  @Inject()
  ctx: Context;

  @Inject()
  schemaService: SchemaService

  @Get('/')
  async home() {
    const result = await axios.get('https://serverless-learn-static-files.oss-cn-shanghai.aliyuncs.com/code/index.html');
    return result.data;
  }
  @Get('/admin')
  async admin() {
    const result = await axios.get('https://serverless-learn-static-files.oss-cn-shanghai.aliyuncs.com/code/admin.html');
    return result.data;
  }
}
