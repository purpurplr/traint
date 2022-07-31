import { JSX } from 'preact';

import LogoIcon from '@assets/icons/logo.svg';

import './header.component.scss';
import { ThemeToggler } from '@global-features/theme/components/theme-toggler/theme-toggler.component';

export const HeaderComponent = (): JSX.Element => (
  <header className="container">
    <h1 className="app-header">
      <LogoIcon className="app-header__logo" />
      <span className="app-header__text">Карта знаний</span>
      <ThemeToggler />
    </h1>
  </header>
);
