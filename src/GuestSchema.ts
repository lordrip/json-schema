import Ajv, { JSONSchemaType } from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import camelYamlDslSchema from './assets/camel-yaml-dsl.json' assert { type: 'json' };
import addFormats from 'ajv-formats';

const schema = {
  type: 'object',
  items: {
    ...camelYamlDslSchema.items,
    properties: {},
  },
  properties: {
    rest: camelYamlDslSchema.items.properties.rest,
  },
  required: ['key', 'value'],
} as unknown as JSONSchemaType<Record<string, unknown>>;

// const schema: any = camelYamlDslSchema;

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  keywords: ['uniforms'],
});
addFormats(ajv);

function createValidator<T>(schema: JSONSchemaType<T>) {
  const validator = ajv.compile(schema);

  return (model: Record<string, unknown>) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);
const noopValidator = () => null;

export const bridge = new JSONSchemaBridge(schema, noopValidator);
