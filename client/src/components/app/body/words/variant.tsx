import React, { FunctionComponent } from 'react';
import { Word } from '../../../../api/search';
import styled from 'styled-components';
import { blackBlue } from '../../../../color';
import { useTranslation } from 'react-i18next';

const Text = styled.div`
  font-size: 17px;
  color: ${blackBlue};
`;

const EmptyText = styled(Text)`
  font-size: 16px;
`;

interface Props {
  word: Word;
}

const Variant: FunctionComponent<Props> = ({ word }) => {
  const { t } = useTranslation();

  if (word.variants.length > 0) {
    return <Text>{word.variants.join(' ')}</Text>;
  } else {
    return <EmptyText>{t('emptyVariants')}</EmptyText>;
  }
};

export { Variant };
