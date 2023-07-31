import { AutoFields, AutoForm, ErrorsField, SubmitField } from '@kie-tools/uniforms-patternfly/dist/esm';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import './App.css';
import { SchemaService } from './SchemaService';
import { ModelDefinition } from './models/model-definition';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

interface FormProps {
  className?: string;
  modelDefinition?: ModelDefinition;
  setModel?: (model: Record<string, unknown>) => void;
}

export const Form: FunctionComponent<FormProps> = (props) => {
  const schemaServiceRef = useRef(new SchemaService());

  const [model] = useState<Record<string, unknown>>(props.modelDefinition?.config.model);
  const [schema, setSchema] = useState<JSONSchemaBridge>();

  useEffect(() => {
    setSchema(schemaServiceRef.current.getSchemaBridge(props.modelDefinition?.config.schema));
  }, [props.modelDefinition]);

  return (
    <>
      {schema === undefined ? null : (
        <AutoForm
          className={props.className}
          schema={schema}
          model={model}
          onSubmit={(model: Record<string, unknown>) => {
            props.setModel?.(model);
          }}
          onChangeModel={(model: Record<string, unknown>) => {
            props.setModel?.(model);
          }}
        >
          <AutoFields />
          <ErrorsField />
          <SubmitField />
        </AutoForm>
      )}
    </>
  );
};
