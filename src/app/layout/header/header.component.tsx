import './header.component.scss';

import LogoIcon from '@assets/icons/logo.svg';
import { ThemeToggler } from '@global-features/theme/components/theme-toggler.component';
import { User } from '@global-features/authorization/components/user.component';
import { RoadmapFilters } from '@roadmap/components/roadmap-filters/components/roadmap-filters.component';

export const Header = (): JSX.Element => (
  <header className="app-header container">
    <h1 className="app-header__title">
      <LogoIcon className="app-header__logo" />
      <span className="app-header__text">Карта знаний</span>
    </h1>
    <section className="app-header__user-panel">
      <ThemeToggler />
      <RoadmapFilters />
      <User />
    </section>
  </header>
);
