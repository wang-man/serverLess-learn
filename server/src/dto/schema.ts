import { Rule, RuleType } from "@midwayjs/validate";

export class SchemaDTO {
  @Rule(RuleType.string().required())
  schema: string;
}