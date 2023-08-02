import userSchema from '../assets/user-schema.json' assert { type: 'json' };
import { SchemaAdapter } from '../models';

export class UserSchemaAdapter implements SchemaAdapter {
  private readonly itemsDefinition: Record<string, unknown> = {};
  private readonly modelsList: string[] = [];

  constructor() {
    /** Capturing the items.definitions object to avoid copying it inside individual schemas */
    this.itemsDefinition = {
      items: {
        definitions: userSchema.properties,
      },
    };

    this.modelsList = Object.keys(userSchema.properties);
  }

  getModelsList(): string[] {
    return this.modelsList;
  }

  getSchema(propertyRefName: keyof typeof userSchema.properties): Record<string, unknown> {
    const propertyRef = userSchema.properties[propertyRefName];

    if (!propertyRef) {
      throw new Error(
        `PropertyRef ${propertyRefName} not found \n A valid propertyRef is one of: ${this.modelsList.join(', ')}`,
      );
    }

    /** TODO: Cache the created schemas to avoid duplicating memory on every request */
    return userSchema;
  }
}
