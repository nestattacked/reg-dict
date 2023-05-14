import React, { FunctionComponent } from 'react';
import { Word } from '../../../../api/search';
import styled from 'styled-components';
import { blackBlue } from '../../../../color';
import { getRandomKey } from '../../../../util/get-random-key';
import { Row as BasicRow } from '../../../common/flex';
import { useTranslation } from 'react-i18next';

const Row = styled(BasicRow)`
  align-items: flex-start;
  margin: 5px 0;
`;

const Pos = styled.div`
  display: inline-block;
  font-size: 17px;
  color: ${blackBlue};
  margin-right: 5px;
  min-width: 44px;
`;

const Meaning = styled.div`
  display: inline-block;
  font-size: 16px;
  color: ${blackBlue};
`;

const EmptyText = styled.div`
  color: ${blackBlue};
  font-size: 16px;
`;

interface Props {
  word: Word;
}

const Translation: FunctionComponent<Props> = ({ word }) => {
  const { t } = useTranslation();

  if (Object.keys(word.translation).length === 0) {
    return <EmptyText>{t('emptyTranslation')}</EmptyText>;
  } else {
    const texts = Object.keys(word.translation).map((pos) => {
      return (
        <Row key={getRandomKey()}>
          <Pos>{pos}</Pos>
          <Meaning>{word.translation[pos]}</Meaning>
        </Row>
      );
    });
    return <>{texts}</>;
  }
};

export { Translation };
