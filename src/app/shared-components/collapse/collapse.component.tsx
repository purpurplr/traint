import './collapse.component.scss';

import { ComponentChildren, JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import clsx from 'clsx';

import ArrowIcon from '@assets/icons/arrow.svg';
import { resolveRenderable } from '@utils/react/resolve-renderable.util';
import { Renderable } from '@typings/react/renderable.type';

interface CollapseProps {
  isOpen?: boolean;
  header: Renderable<boolean>;
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
  const [isExpanded, setExpanded] = useState(isOpen);

  const expandedPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHeight = expandedPanel.current?.scrollHeight ?? 0;
    setHeight(isExpanded ? scrollHeight : 0);
  }, [isExpanded]);

  const toggleExpand = (): void => {
    setExpanded(!isExpanded);
  };

  return (
    <section className="collapse">
      <header
        className={clsx('collapse__header header', {
          'expand-icon_position_end': expandIconPosition === 'end',
        })}
        onClick={toggleExpand}
      >
        <span className={clsx('collapse__expand-icon', { 'collapse__expand-icon_rotated': isExpanded })}>
          {expandIcon ?? <ArrowIcon className="default-arrow-icon" />}
        </span>
        <div className="header__content">{resolveRenderable(header, isExpanded)}</div>
      </header>
      <div className="collapse__panel" ref={expandedPanel} style={{ height }}>
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}
