import { SimpleList, SimpleListItem, SimpleListItemProps } from '@patternfly/react-core';
import { FunctionComponent, RefObject, useState } from 'react';

interface ModelsListProps {
  modelsList: string[];
  onModelClick: (modelName: string) => void;
}

export const ModelsList: FunctionComponent<ModelsListProps> = (props) => {
  const [activeItem, setActiveItem] = useState(-1);

  const onSelect = (
    selectedItem: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>,
    selectedItemProps: SimpleListItemProps,
  ) => {
    setActiveItem(selectedItemProps.itemId as number);
    props.onModelClick(selectedItemProps.children as string);
  };

  const items = props.modelsList.map((modelName, index) => (
    <SimpleListItem key={index} itemId={index} isActive={activeItem === index}>
      {modelName}
    </SimpleListItem>
  ));

  return (
    <>
      {items.length === 0 ? null : (
        <SimpleList onSelect={onSelect} isControlled={false} aria-label="Models List">
          {items}
        </SimpleList>
      )}
    </>
  );
};
