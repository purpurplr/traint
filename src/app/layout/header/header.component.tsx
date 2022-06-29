import { JSX } from 'preact';

import { LogoIconComponent } from '@shared-components/icon-components/logo/logo-icon.component';

import './header.component.scss';

export const HeaderComponent = (): JSX.Element => (
  <header className="container">
    <h1 className="app-header">
      <LogoIconComponent className="app-header__logo" />
      <span className="app-header__text">Карта знаний</span>
    </h1>
  </header>
);
