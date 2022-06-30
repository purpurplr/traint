import './card.component.scss';

import { ComponentChild, JSX } from 'preact';

export interface CardComponentProps {
  header: ComponentChild;
  body: ComponentChild;
}
export const CardComponent = ({ header, body }: CardComponentProps): JSX.Element => (
  <article className="card">
    <header className="card__header">{header}</header>
    <main className="card__body">{body}</main>
  </article>
);
