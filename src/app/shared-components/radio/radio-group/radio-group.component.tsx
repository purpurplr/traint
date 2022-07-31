import { cloneElement, VNode } from 'preact';
import { useState } from 'preact/hooks';
import { DictionaryKey } from '@typings/utility-types/object.types';
import { RadioLike } from '@shared-components/radio/radio.types';
import { HTMLAttributes } from 'preact/compat';
import clsx from 'clsx';

import './radio-group.component.scss';

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: VNode<RadioLike>[];
}

export function RadioGroup<T extends DictionaryKey>({ children, ...divAttributes }: RadioGroupProps): VNode {
  const [activeId, setActiveId] = useState<T>();

  const isActive = (id: T): boolean => id === activeId;

  return (
    <div {...divAttributes} className={clsx('radio-group', divAttributes.className)}>
      {children?.map((child) => cloneElement(child, { isActive, setActiveId }))}
    </div>
  );
}
