import { ConnectedFieldProps, connectField } from 'uniforms';
import { ExpandableDetails } from '../forms/ExpandableDetails';
import { Rest as RestType } from '../types';
import { Card, CardBody, CardTitle } from '@patternfly/react-core';
import { CustomAutoField } from '../forms/CustomAutoField';

interface RestProps {
  'data-testid': string;
  value: RestType;
  label: string;
  [key: string]: unknown;
}

export const RestForm = connectField((props: ConnectedFieldProps<RestProps>) => {
  return (
    <Card>
      <CardTitle>{props.label}</CardTitle>
      <ExpandableDetails details={props} />

      <CardBody>
        {props.fields?.map((field) => (
          <CustomAutoField key={field} disabled={props.disabled} name={field} />
        ))}
      </CardBody>
    </Card>
  );
});
