import { Button, Card, CardBody, CardTitle, MenuToggle, MenuToggleElement } from '@patternfly/react-core';
import { Select, SelectList, SelectOption } from '@patternfly/react-core/next';
import { CSSProperties, FunctionComponent, MouseEvent as ReactMouseEvent, Ref, useRef, useState } from 'react';

interface ModelSelectorProps {
  availableModelsNames: string[];
  onAddClick: (model: string) => void;
}

export const ModelSelector: FunctionComponent<ModelSelectorProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Select a value');
  const menuRef = useRef<HTMLDivElement>(null);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: ReactMouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    setSelected(itemId as string);
    setIsOpen(false);
  };

  const toggle = (toggleRef: Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px',
        } as CSSProperties
      }
    >
      {selected}
    </MenuToggle>
  );

  return (
    <Card>
      <CardTitle>Add a new model</CardTitle>
      <CardBody>
        <Select
          id="single-select"
          ref={menuRef}
          isOpen={isOpen}
          selected={selected}
          onSelect={onSelect}
          onOpenChange={(isOpen) => setIsOpen(isOpen)}
          toggle={toggle}
        >
          <SelectList>
            {props.availableModelsNames.map((model) => (
              <SelectOption key={model} itemId={model}>
                {model}
              </SelectOption>
            ))}
          </SelectList>
        </Select>

        <Button
          isDisabled={!selected || selected === 'Select a value'}
          onClick={() => {
            props.onAddClick(selected);
          }}
        >
          Add
        </Button>
      </CardBody>
    </Card>
  );
};
