import { ReactNode } from 'react';

export type Renderable<P> = ReactNode | ((props: P) => ReactNode);
