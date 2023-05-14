import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';
import { prepareI18N } from './global';
import { GlobalStyle } from './global-style';

const main = async (): Promise<void> => {
  await prepareI18N();
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

main();
