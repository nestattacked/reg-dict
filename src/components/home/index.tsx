import React, { useCallback, useState } from 'react';
import type { FunctionComponent } from 'react';
import { Header } from './header';
import { getMoreWords, getWords } from '../../api/get-words';
import type { Word } from '../../api/get-words';
import { useUpdateEffect } from 'react-use';
import { debounce } from 'lodash';
import { Examples } from './examples';
import styled from 'styled-components';
import { useIsWide } from '../../hook/use-is-width';
import { Words } from './words';
import { Center } from '../common/center';
import { MaxBox } from '../common/max-box';

const MainContainer = styled.div<{ isWide: boolean }>`
  padding-top: ${(props) => (props.isWide ? '80px' : '175px')};
`;

const NoWords = styled.p`
  font-size: 18px;
  margin-top: 30px;
  text-align: center;
`;

const Home: FunctionComponent = () => {
  const isWide = useIsWide();

  const [searchKey, setSearchKey] = useState('');
  const [words, setWords] = useState<null | Word[]>(null);
  const [moreWords, setMoreWords] = useState(false);

  const showExamples = () => {
    setWords(null);
    setMoreWords(false);
  };

  const searchMoreWords = async () => {
    const response = await getMoreWords(searchKey, 10, words!.length);
    setWords([...words!, ...response.words]);
    setMoreWords(response.more);
  };

  const searchWords = async (key: string) => {
    const response = await getWords(key);
    setWords(response.words);
    setMoreWords(response.more);
  };
  const debounceSearch = useCallback(
    debounce(async (key: string) => {
      searchWords(key);
    }, 500),
    []
  );
  useUpdateEffect(() => {
    debounceSearch(searchKey);
  }, [searchKey]);

  const core =
    words === null ? (
      <Examples />
    ) : words.length === 0 ? (
      <NoWords>抱歉，没有找到相关的内容</NoWords>
    ) : (
      <Words words={words} moreWords={moreWords} searchMoreWords={searchMoreWords} />
    );
  return (
    <>
      <Header showExamples={showExamples} searchKey={searchKey} setSearchKey={setSearchKey} searchWords={searchWords} />
      <MainContainer isWide={isWide}>
        <Center>
          <MaxBox maxWidth={800}>{core}</MaxBox>
        </Center>
      </MainContainer>
    </>
  );
};

export { Home };
