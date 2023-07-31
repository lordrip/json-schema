import camelYamlDslSchema from '../assets/camel-yaml-dsl.json' assert { type: 'json' };

export interface SchemaAdapter {
  getModelsList(): string[];
  getSchema(modelName: string): Record<string, unknown>;
}

export class CamelYamlSchemaAdapter implements SchemaAdapter {
  private readonly itemsDefinition: Record<string, unknown> = {};
  private readonly modelsList: string[] = [];

  constructor() {
    /** Capturing the items.definitions object to avoid copying it inside individual schemas */
    this.itemsDefinition = {
      items: {
        definitions: camelYamlDslSchema.items.definitions,
      },
    };

    this.modelsList = Object.keys(camelYamlDslSchema.items.properties);
  }

  getModelsList(): string[] {
    return this.modelsList;
  }

  getSchema(propertyRefName: string): Record<string, unknown> {
    const propertyRef = camelYamlDslSchema.items.properties[propertyRefName];

    if (!propertyRef) {
      throw new Error(
        `PropertyRef ${propertyRefName} not found \n A valid propertyRef is one of: ${this.modelsList.join(', ')}`,
      );
    }

    /** TODO: Cache the created schemas to avoid duplicating memory on every request */
    return {
      $schema: 'https://json-schema.org/draft-04/schema#',
      type: 'object',
      items: this.itemsDefinition.items,
      properties: {
        [propertyRefName]: propertyRef,
      },
    };
  }
}
