import './card.component.scss';
import { ReactNode } from 'react';

export interface CardComponentProps {
  header: ReactNode;
  body: ReactNode;
}

export const CardComponent = ({ header, body }: CardComponentProps): JSX.Element => (
  <article className="card">
    <header className="card__header">{header}</header>
    <main className="card__body">{body}</main>
  </article>
);
