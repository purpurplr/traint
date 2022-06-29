import { JSX } from 'preact';

import { HeaderComponent } from '@layout/header/header.component';

import { RoadmapComponent } from '@roadmap/roadmap.component';
import { ThemeToggler } from '@shared-components/theme-toggler/theme-toggler.component';

export function App(): JSX.Element {
  return (
    <>
      <ThemeToggler />
      <HeaderComponent />
      <RoadmapComponent />
    </>
  );
}
