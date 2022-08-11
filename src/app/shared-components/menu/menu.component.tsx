import useOnClickOutside from '@hooks/use-onclick-outside.hook';
import clsx from 'clsx';
import { cloneElement, JSX } from 'preact';
import { useRef, useState } from 'preact/hooks';

import './menu.component.scss';

interface MenuProps {
  anchorElement?: JSX.Element;
  children?: JSX.Element[];
  menuClassName?: string;
}

export function Menu({ anchorElement, children, menuClassName }: MenuProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const anchorRef = useRef(null);

  const onAnchorClick = (): void => {
    setIsExpanded((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsExpanded(false);
  };

  useOnClickOutside(anchorRef, closeMenu);

  return (
    <div>
      {cloneElement(anchorElement ?? <button>Menu</button>, { onclick: onAnchorClick, ref: anchorRef })}
      {isExpanded && (
        <div className={clsx('basic-menu', menuClassName)} onClick={closeMenu}>
          {children?.map((menuItem) => menuItem)}
        </div>
      )}
    </div>
  );
}
