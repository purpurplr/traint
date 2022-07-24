import { SimpleRenderable, Renderable } from '@typings/react/renderable.type';

export function resolveRenderable<P>(renderable: Renderable<P>, props: P): SimpleRenderable;

export function resolveRenderable<P>(renderable: Renderable<P> | undefined, props: P): SimpleRenderable | undefined;

export function resolveRenderable<P>(renderable: Renderable<P> | undefined, props: P): SimpleRenderable | undefined {
  if (renderable === undefined) return undefined;
  return typeof renderable === 'function' ? renderable(props) : renderable;
}
