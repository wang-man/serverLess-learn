import { Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as validate from '@midwayjs/validate';
import * as faas from '@midwayjs/faas';
import * as orm from '@midwayjs/orm';
import * as defaultConfig from './config/config.default';

@Configuration({
  imports: [faas, orm, validate],
  importConfigs: [
    {
      default: defaultConfig
    },
  ],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady() { }
}
