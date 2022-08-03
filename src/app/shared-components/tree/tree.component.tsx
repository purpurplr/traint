import './tree.component.scss';

import { JSX } from 'preact';

import { useState } from 'preact/hooks';
import { TreeItem } from './tree-item.component';

const DEFAULT_PADDING_LEFT = 10;

interface TreeProps {
  rootItem: {
    id: string;
    label: string;
    children: object[];
  };
}

export const Tree = ({ rootItem }: TreeProps): JSX.Element => {
  const { label, children } = rootItem;

  const [isAllItemsExpanded, setIsAllItemsExpanded] = useState(false);

  const expandAll = (): void => setIsAllItemsExpanded(true);
  const collapseAll = (): void => setIsAllItemsExpanded(false);

  return (
    <div className="tree">
      <div className="tree__header">
        <span>{label}</span>
        <button onClick={collapseAll}>collapse all</button>
        <button onClick={expandAll}>expand all</button>
      </div>
      <div className="tree_body">
        {children.map((item, index) => (
          <TreeItem
            isAllItemsExpanded={isAllItemsExpanded}
            paddingLeft={DEFAULT_PADDING_LEFT}
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
