import { RoadmapComponent } from '@modules/roadmap/roadmap.component';
import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app/app.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <RoadmapComponent /> }],
  },
], {basename: '/traint/'});

export const Router: FC = () => <RouterProvider router={router} />;
