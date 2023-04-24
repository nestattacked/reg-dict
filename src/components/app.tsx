import React from 'react';
import type { FunctionComponent } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './home';
import { useTitle } from 'react-use';
import { useTranslation } from 'react-i18next';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const App: FunctionComponent = () => {
  const { t } = useTranslation();
  useTitle(t('regdict'));

  return <RouterProvider router={router} />;
};

export { App };
