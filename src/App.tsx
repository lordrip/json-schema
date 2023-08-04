import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { ModelSelector } from './ModelSelector';
import { ModelsList } from './ModelsList';
import { YamlExporter } from './YamlExporter';
import restDefinition from './assets/rest-definition.json';
import { Form } from './forms';
import { ModelsManager } from './models';
import { ModelDefinition } from './models/model-definition';

export function App() {
  const modelsManagerRef = useRef(new ModelsManager());
  const [availableModelsNames] = useState(modelsManagerRef.current.getAvailableModelsNames());
  const [modelsList, setModelsList] = useState<string[]>([]);
  const [allModelsDefinitions, setAllModelsDefinitions] = useState<Record<string, unknown>[]>([]);

  const [currentModelDefinition, setCurrentModelDefinition] = useState<ModelDefinition>();

  const onAddModel = useCallback((modelName: string) => {
    modelsManagerRef.current.addModel(modelName);
    setModelsList(modelsManagerRef.current.getModelsNames());
    setAllModelsDefinitions(modelsManagerRef.current.getAllModels());
  }, []);

  const onModelClick = useCallback((modelName: string) => {
    const model = modelsManagerRef.current.getModelDefinition(modelName);
    setCurrentModelDefinition(model);
  }, []);

  const onSetModel = useCallback(
    (model: Record<string, unknown>) => {
      modelsManagerRef.current.setModel(currentModelDefinition!.config.name, model);
      setAllModelsDefinitions(modelsManagerRef.current.getAllModels());
    },
    [currentModelDefinition],
  );

  /** Fill default information */
  useEffect(() => {
    onAddModel('example-property');
    onAddModel('rest');
    onAddModel('restConfiguration');

    const restModel = modelsManagerRef.current.getModelDefinition('rest');
    restModel.setModel(restDefinition);
    setAllModelsDefinitions(modelsManagerRef.current.getAllModels());
    onModelClick('rest');
  }, [onAddModel, onModelClick]);

  return (
    <div className="shell">
      <div>
        <ModelSelector availableModelsNames={availableModelsNames} onAddClick={onAddModel} />
        <ModelsList modelsList={modelsList} onModelClick={onModelClick} />
      </div>

      <YamlExporter className="shell__code" model={allModelsDefinitions} />

      <Form className="shell__form" setModel={onSetModel} modelDefinition={currentModelDefinition} />
    </div>
  );
}
