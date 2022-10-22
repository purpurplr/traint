import './header.component.scss';

import LogoIcon from '@assets/icons/logo.svg';
import { ThemeToggler } from '@global-features/theme/components/theme-toggler.component';
import { Auth } from '@global-features/authorization/components/auth.component';

import { Filters } from '../../modules/filters/components/filters.component';

export const Header = (): JSX.Element => (
  <header className="header container">
    <h1 className="header__title">
      <LogoIcon className="header__logo" />
      <span className="header__text">Карта знаний</span>
    </h1>
    <section className="header__user-panel">
      <ThemeToggler />
      <Filters />
      <Auth />
    </section>
  </header>
);
