import { JSX } from 'preact';

import { ThemeToggler } from '@global-features/theme/components/theme-toggler/theme-toggler.component';
import { HeaderComponent } from '@layout/header/header.component';
import { RoadmapComponent } from '@roadmap/roadmap.component';
import { ToasterProvider } from '@shared-components/toasts';

export function App(): JSX.Element {
  return (
    <ToasterProvider>
      <ThemeToggler />
      <HeaderComponent />
      <RoadmapComponent />
    </ToasterProvider>
  );
}
