import { AutoFields, AutoForm, ErrorsField, SubmitField } from '@kie-tools/uniforms-patternfly/dist/esm';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { JSONSchemaBridge } from '../schemas/JSONSchemaBridgeLocal';
import { CustomAutoField } from './CustomAutoField';
import { SchemaService } from '../SchemaService';
import { ModelDefinition } from '../models/model-definition';

interface FormProps {
  className?: string;
  modelDefinition?: ModelDefinition;
  setModel?: (model: Record<string, unknown>) => void;
}

export const Form: FunctionComponent<FormProps> = (props) => {
  const formRef = useRef<typeof AutoForm>();
  const schemaServiceRef = useRef(new SchemaService());

  const [model, setModel] = useState<Record<string, unknown>>();
  const [schema, setSchema] = useState<JSONSchemaBridge>();
  useEffect(() => {
    formRef.current?.reset();

    setModel(props.modelDefinition?.config.model);
    setSchema(schemaServiceRef.current.getSchemaBridge(props.modelDefinition?.config.schema));
  }, [props.modelDefinition]);

  return (
    <>
      {schema === undefined ? null : (
        <AutoForm
          ref={formRef}
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
          <AutoFields autoField={CustomAutoField} />
          {/* <AutoFields /> */}
          <ErrorsField />
          <SubmitField />
        </AutoForm>
      )}
    </>
  );
};
