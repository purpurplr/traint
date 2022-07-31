import { JSX } from 'preact';
import Router, { Route } from 'preact-router';

import { HeaderComponent } from '@layout/header/header.component';
import { RoadmapComponent } from '@roadmap/roadmap.component';
import { Toaster } from '@shared-components/toaster';
import { Redirect } from '@utils/react/redirect.component';

export function App(): JSX.Element {
  return (
    <>
      <HeaderComponent />

      <Router>
        <Route path="/root/:path*" component={RoadmapComponent} />
        <Route path="/auth" component={() => <p>auth</p>} />
        <Redirect default to="/root" />
      </Router>

      <Toaster />
    </>
  );
}
