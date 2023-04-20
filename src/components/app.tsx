import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { black } from '../color';

const Div = styled.div`
  color: ${black};
  margin-top: 10px;
`;

const App = () => {
  const { t } = useTranslation();
  return <Div>{t('hello')}</Div>;
};

export { App };
