import {
  BoolField,
  DateField,
  ListField,
  NestField,
  NumField,
  RadioField,
  SelectField,
  TextField,
} from '@kie-tools/uniforms-patternfly';
import invariant from 'invariant';
import { FunctionComponent } from 'react';
import { createAutoField } from 'uniforms';

export const CustomAutoField = createAutoField((props) => {
  if (props.allowedValues) {
    return props.checkboxes && props.fieldType !== Array ? RadioField : SelectField;
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
      return InternalNestField;
    case String:
      return TextField;
  }

  return invariant(false, 'Unsupported field type: %s', props.fieldType);
});

export const InternalNestField: FunctionComponent = (props) => {
  return (
    <span>hola</span>
  );
};
