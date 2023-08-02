import { CamelYamlSchemaAdapter } from '../schemas/camel-yaml-schema.adapter';
import { RecursiveSchemaAdapter } from '../schemas/recursive-schema.adapter';
import { UserSchemaAdapter } from '../schemas/user-schema.adapter';
import { ModelDefinition } from './model-definition';
import { SchemaAdapter } from './schema-adapter';

/**
 * ModelsManager
 *
 * This class is the representation of the models manager.
 *
 * It holds all the models like rest, from, restConfiguration alongside their JSON schema
 * required to render the configuration form.
 */
export class ModelsManager {
  modelsNames: string[] = [];

  private readonly schemaAdapters: SchemaAdapter[] = [];
  private readonly availableModelsName: string[] = [];
  private readonly modelsDefinitions: ModelDefinition[] = [];

  constructor() {
    this.loadSchemaAdapters();
  }

  getAvailableModelsNames(): string[] {
    return this.availableModelsName;
  }

  getModelsNames(): string[] {
    return this.modelsNames;
  }

  addModel(modelName: string): void {
    const schemaAdapter = this.schemaAdapters.find((adapter) => adapter.getModelsList().includes(modelName));

    if (!schemaAdapter) {
      throw new Error(`Model ${modelName} not found`);
    }

    const schema = schemaAdapter.getSchema(modelName);
    const model = new ModelDefinition({
      name: modelName,
      model: {},
      schema,
    });

    this.modelsDefinitions.push(model);
    this.modelsNames = this.modelsDefinitions.map((model) => model.getName());
  }

  getModelDefinition(modelName: string): ModelDefinition {
    const model = this.modelsDefinitions.find((model) => model.getName() === modelName);

    if (!model) {
      throw new Error(`Model ${modelName} not found`);
    }

    return model;
  }

  getAllModels(): Record<string, unknown>[] {
    return this.modelsDefinitions.map((model) => model.getModel());
  }

  setModel(modelName: string, model: Record<string, unknown>): void {
    const modelDefinition = this.getModelDefinition(modelName);
    modelDefinition.setModel(model);
  }

  private loadSchemaAdapters(): void {
    this.loadSchemaAdapter(new UserSchemaAdapter());
    this.loadSchemaAdapter(new RecursiveSchemaAdapter());
    this.loadSchemaAdapter(new CamelYamlSchemaAdapter());
  }

  private loadSchemaAdapter(adapter: SchemaAdapter): void {
    this.schemaAdapters.push(adapter);
    this.availableModelsName.push(...adapter.getModelsList());
  }
}
