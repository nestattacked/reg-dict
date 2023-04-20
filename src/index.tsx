import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { prepareI18N } from './global';
import { GlobalStyle } from './global-style';

const main = async (): Promise<void> => {
  await prepareI18N();
  const root = document.getElementById('root');
  ReactDOM.render(
    <>
      <GlobalStyle />
      <App />
    </>,
    root
  );
};

main();
