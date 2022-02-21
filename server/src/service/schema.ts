import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Schema } from '../entity/schema';

@Provide()
export class SchemaService {
  @InjectEntityModel(Schema)
  schemaModel: Repository<Schema>;

  // 向数据库中新增一条数据
  async save(schemaData: string) {
    const schema = new Schema();
    schema.schema = schemaData;
    const result = await this.schemaModel.save(schema);
    return result
  }

  // 向数据库中取到一条数据
  async getLast() {
    const lastSchema = await this.schemaModel.findOne({
      // select: ['schema'],   // 也可以限制只取某些个字段
      order: { id: 'DESC' }
    })
    return lastSchema;
  }
}
