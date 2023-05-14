import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from 'react-use';
import styled from 'styled-components';
import { Header } from './header';
import { Column, Flex } from '../common/flex';
import { Body } from './body';
import { useSearch } from '../../hook/use-search';
import { useInput } from '../../hook/use-input';
import { Keyboard } from './keyboard';
import { Video } from '../common/video';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 700px;
  padding: 0 30px;
  margin: auto;
  overflow: hidden;
`;

const App: FunctionComponent = () => {
  const { t } = useTranslation();

  useTitle(t('regdict'));

  const { task, search, moreSearch, reset } = useSearch();
  const {
    input,
    type,
    pattern,
    keyboardOpened,
    toggleType,
    toggleKeyboard,
    update,
    enter,
    ins,
    del
  } = useInput(search);
  const [video, setVideo] = useState<string>();

  return (
    <Container>
      <Column>
        <Header
          input={input}
          type={type}
          pattern={pattern}
          toggleType={toggleType}
          toggleKeyboard={toggleKeyboard}
          update={update}
          enter={enter}
          reset={reset}
        />
        <Flex size={1}>
          <Body task={task} moreSearch={moreSearch} setVideo={setVideo} />
        </Flex>
      </Column>
      <Keyboard
        keyboardOpened={keyboardOpened}
        type={type}
        pattern={pattern}
        search={search}
        ins={ins}
        del={del}
      />
      <Video video={video} setVideo={setVideo} />
    </Container>
  );
};

export { App };
