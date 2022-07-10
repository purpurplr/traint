import './collapse.component.scss';

import { ComponentChildren, JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import clsx from 'clsx';

import ArrowIcon from '@assets/icons/arrow.svg';

interface CollapseProps {
  isOpen: boolean;
  header: (arg: boolean) => ComponentChildren;
  expandIcon?: JSX.Element;
  expandIconPosition?: 'start' | 'end';
  children: ComponentChildren;
}

export function Collapse({
  isOpen = false,
  header,
  expandIcon,
  expandIconPosition = 'start',
  children,
}: CollapseProps): JSX.Element {
  const [height, setHeight] = useState(0);
  const [isExpand, setExpand] = useState(isOpen);

  const expandedPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHeight = expandedPanel.current?.scrollHeight as number;

    setHeight(isExpand ? scrollHeight : 0);
  }, [isExpand]);

  const toggleExpand = (): void => {
    setExpand(!isExpand);
  };

  return (
    <section className="collapse">
      <header
        className={clsx('collapse__header header', {
          'expand-icon_position_end': expandIconPosition === 'end',
        })}
        onClick={toggleExpand}
      >
        <span className={clsx('collapse__expand-icon', { rotate: isExpand })}>
          {expandIcon ?? <ArrowIcon className="default-arrow-icon" />}
        </span>
        <div className="header__content">{header(isExpand)}</div>
      </header>
      <div className="collapse__panel" ref={expandedPanel} style={{ height }}>
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}
