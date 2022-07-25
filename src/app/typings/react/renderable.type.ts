import { ComponentChildren, VNode } from 'preact';

export type SimpleRenderable = ComponentChildren | VNode | string | number | bigint | boolean | null;
export type Renderable<P> = SimpleRenderable | ((props: P) => SimpleRenderable);
