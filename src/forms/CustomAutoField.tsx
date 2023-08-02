import {
  BoolField,
  DateField,
  ListField,
  NumField,
  RadioField,
  SelectField,
  TextField,
} from '@kie-tools/uniforms-patternfly';
import invariant from 'invariant';
import { FunctionComponent } from 'react';
import { connectField, createAutoField } from 'uniforms';
import NestField from './NestField';

export const CustomAutoField = createAutoField((props) => {
  if (props.allowedValues) {
    return props.checkboxes && props.fieldType !== Array ? RadioField : SelectField;
  }

  console.log(props.name);

  if (props.name.endsWith('steps')) {
    return connectField(InternalNestField);
  }

  switch (props.fieldType) {
    case Array:
      return ListField;
    case Boolean:
      return BoolField;
    case Date:
      return DateField;
    case Number:
      return NumField;
    case Object:
      return NestField;
    case String:
      return TextField;
  }

  return invariant(false, 'Unsupported field type: %s', props.fieldType);
});

export const InternalNestField: FunctionComponent = (props) => {
  return (
    <code>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </code>
  );
};
