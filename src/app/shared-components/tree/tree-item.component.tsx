/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './tree.component.scss';

import { Fragment, JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import clsx from 'clsx';

import ArrowIcon from '@assets/icons/arrow.svg';

interface TreeItemProps {
  item: any;
  paddingLeft: number;
  isAllItemsExpanded: boolean;
}

export const TreeItem = ({ item, paddingLeft, isAllItemsExpanded }: TreeItemProps): JSX.Element => {
  const [isItemExpanded, setIsItemExpanded] = useState(false);

  useEffect(() => {
    setIsItemExpanded(isAllItemsExpanded);
  }, [isAllItemsExpanded]);

  const toggleExpand = (): void => {
    setIsItemExpanded(!isItemExpanded);
  };

  return (
    <div className="tree__item" style={{ paddingLeft: `${paddingLeft}px` }}>
      <div className="tree__header" onClick={toggleExpand}>
        <span>{item.displayText}</span>
        {item.children?.length > 0 && (
          <span className={clsx('tree__expand-icon', { 'tree__expand-icon_rotated': isItemExpanded })}>
            {<ArrowIcon className="default-arrow-icon" />}
          </span>
        )}
      </div>
      {isItemExpanded &&
        item.children?.length > 0 &&
        item.children.map((child: any) => (
          <Fragment key={child.id}>
            <TreeItem isAllItemsExpanded={isAllItemsExpanded} paddingLeft={paddingLeft} item={child} />
          </Fragment>
        ))}
    </div>
  );
};
