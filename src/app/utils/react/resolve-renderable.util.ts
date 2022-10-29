import { Renderable } from '@interfaces/react/renderable.type';
import { resolveValue } from '@utils/resolve-value.util';
import { ReactNode } from 'react';

export function resolveRenderable<P>(renderable: Renderable<P>, props: P): ReactNode {
  if (renderable === undefined) return undefined;
  return resolveValue(renderable, props);
}
