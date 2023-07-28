// import { AutoFields, AutoForm, ErrorsField, SubmitField } from 'uniforms-unstyled';
import { AutoFields, AutoForm, ErrorsField, SubmitField } from '@kie-tools/uniforms-patternfly/dist/esm';
import { useState } from 'react';
import './App.css';
import { bridge as schema } from './GuestSchema';
import { YamlExporter } from './YamlExporter';

export function App() {
  const [model, setModel] = useState({}); // <- add this

  return (
    <div className="shell">
      <YamlExporter className="shell__code" model={model} />

      <AutoForm
        className="shell__form"
        schema={schema}
        model={model}
        onSubmit={(model: Record<string, unknown>) => {
          console.log(model);
          setModel(model);
        }}
        onChangeModel={(model: Record<string, unknown>) => {
          setModel(model);
        }}
      >
        <AutoFields />
        <ErrorsField />
        <SubmitField />
      </AutoForm>
    </div>
  );
}
