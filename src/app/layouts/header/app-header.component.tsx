import LogoIcon from '@assets/icons/logo.svg';
import { User } from '@global-features/authorization/components/user.component';
import { ThemeToggler } from '@global-features/theme';
import { RoadmapFilters } from '@modules/roadmap/components/roadmap-filters/components/roadmap-filters.component';
import { ContactUs } from '@global-features/contact-us/components/contact-us.component';

import './app-header.component.scss';

export const AppHeader = (): JSX.Element => (
  <header className="app-header container">
    <h1 className="app-header__title">
      <LogoIcon className="app-header__logo" />
      <span className="app-header__text">Карта знаний</span>
    </h1>
    <section className="app-header__user-panel">
      <ContactUs />
      <ThemeToggler />
      <RoadmapFilters />
      <User />
    </section>
  </header>
);
