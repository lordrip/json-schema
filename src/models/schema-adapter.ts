export interface SchemaAdapter {
  getModelsList(): string[];
  getSchema(modelName: string): Record<string, unknown>;
}
