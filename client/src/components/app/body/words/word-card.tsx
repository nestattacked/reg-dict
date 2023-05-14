import React, { FunctionComponent } from 'react';
import { Word } from '../../../../api/search';
import styled from 'styled-components';
import { blackBlue, orange, white } from '../../../../color';
import { useTranslation } from 'react-i18next';
import { Pronunciation } from './pronunciation';
import { Translation } from './translation';
import { Variant } from './variant';
import { Example } from './example';
import { External } from './external';

const Container = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  color: ${orange};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Label = styled.div`
  width: fit-content;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-color: ${blackBlue};
  color: ${white};
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  margin: 12px 0;
  padding: 0 6px;
`;

interface Props {
  word: Word;
  setVideo: (video?: string) => void;
}

const WordCard: FunctionComponent<Props> = ({ word, setVideo }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{word.word}</Title>
      <Label>{t('pronunciation')}</Label>
      <Pronunciation word={word} />
      <Label>{t('translation')}</Label>
      <Translation word={word} />
      <Label>{t('variant')}</Label>
      <Variant word={word} />
      <Label>{t('example')}</Label>
      <Example word={word} setVideo={setVideo} />
      <Label>{t('external')}</Label>
      <External word={word} />
    </Container>
  );
};

export { WordCard };
