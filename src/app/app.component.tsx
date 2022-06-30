import { JSX } from 'preact';

import { ThemeToggler } from '@global-features/theme/components/theme-toggler/theme-toggler.component';
import { HeaderComponent } from '@layout/header/header.component';
import { RoadmapComponent } from '@roadmap/roadmap.component';

export function App(): JSX.Element {
  return (
    <>
      <ThemeToggler />
      <HeaderComponent />
      <RoadmapComponent />
    </>
  );
}
