import { HTMLAttributes } from 'preact/compat';
import { JSX } from 'preact';
import { useLayoutEffect, useState } from 'preact/hooks';
import clsx from 'clsx';

import './lazy-image.component.scss';

export function LazyImage(props: HTMLAttributes<HTMLImageElement>): JSX.Element | null {
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);
  }, []);

  return props.src ? (
    <img
      {...props}
      src={props.src}
      alt={props.alt}
      className={clsx(props.className, 'lazy-image', { 'lazy-image_faded': loading })}
      loading="lazy"
      onLoad={() => setLoading(false)}
    />
  ) : null;
}
