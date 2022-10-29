import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '@layouts/header/app-header.component';

import './styles/styles.scss';

export function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
