import React, { FunctionComponent } from 'react';
import { SearchTask } from '../../../../hook/use-search';
import { WordCard } from './word-card';
import { getRandomKey } from '../../../../util/get-random-key';
import styled from 'styled-components';
import { blackBlue, white } from '../../../../color';
import { useTranslation } from 'react-i18next';
import { CenterColumn, Flex } from '../../../common/flex';
import { Loading } from '../../../common/loading';

const Empty = styled.span`
  color: ${blackBlue};
  font-size: 16px;
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: ${blackBlue};
  color: ${white};
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  margin: auto;
  cursor: pointer;
`;

const CenterLoading = styled(Loading)`
  margin: auto;
`;

interface Props {
  task: SearchTask;
  moreSearch: () => Promise<void>;
  setVideo: (video?: string) => void;
}

const Words: FunctionComponent<Props> = ({ task, moreSearch, setVideo }) => {
  const { t } = useTranslation();

  if (task.searching && task.words.length === 0) {
    return (
      <CenterColumn>
        <Flex size={1} />
        <Loading />
        <Flex size={2} />
      </CenterColumn>
    );
  }

  if (!task.searching && task.words.length === 0) {
    return (
      <CenterColumn>
        <Flex size={1} />
        <Empty>{t('emptyWords')}</Empty>
        <Flex size={2} />
      </CenterColumn>
    );
  }

  const wordCards = task.words.map((word) => (
    <WordCard key={getRandomKey()} word={word} setVideo={setVideo} />
  ));

  const more = task.searching ? (
    <CenterLoading />
  ) : (
    <Button onClick={moreSearch}>{t('searchMore')}</Button>
  );

  return (
    <>
      {wordCards}
      {task.more ? more : null}
    </>
  );
};

export { Words };
