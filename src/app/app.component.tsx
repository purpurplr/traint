import { JSX } from 'preact';

import { ThemeToggler } from '@global-features/theme/components/theme-toggler/theme-toggler.component';
import { HeaderComponent } from '@layout/header/header.component';
import { RoadmapComponent } from '@roadmap/roadmap.component';
import { Toaster } from '@shared-components/toaster';

export function App(): JSX.Element {
  return (
    <>
      <ThemeToggler />
      <HeaderComponent />
      <RoadmapComponent />

      <Toaster />
    </>
  );
}
