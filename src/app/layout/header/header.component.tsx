import { JSX } from 'preact';

import LogoIcon from '@assets/icons/logo.svg';

import './header.component.scss';

export const HeaderComponent = (): JSX.Element => (
  <header className="container">
    <h1 className="app-header">
      <LogoIcon className="app-header__logo" />
      <span className="app-header__text">Карта знаний</span>
    </h1>
  </header>
);
