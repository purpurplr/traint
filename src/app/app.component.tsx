import Router, { Route } from 'preact-router';

import { Header } from '@layout/header/header.component';
import { RoadmapComponent } from '@roadmap/roadmap.component';
import { Toaster } from '@shared-components/toaster';
import { Redirect } from '@global-features/router/redirect.component';

export function App(): JSX.Element {
  return (
    <>
      <Header />

      <Router>
        <Route path="/root/:path*" component={RoadmapComponent} />
        <Route path="/auth" component={() => <p>auth</p>} />
        <Redirect default to="/root" />
      </Router>

      <Toaster />
    </>
  );
}
