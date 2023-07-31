export class ModelDefinition {
  constructor(
    public readonly config: {
      name: string;
      model: Record<string, unknown>;
      schema: Record<string, unknown>;
    },
  ) {}

  getName(): string {
    return this.config.name;
  }

  getModel(): Record<string, unknown> {
    return this.config.model;
  }

  setModel(model: Record<string, unknown>): void {
    this.config.model = model;
  }
}
