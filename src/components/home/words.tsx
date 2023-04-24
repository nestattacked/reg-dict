import React from 'react';
import type { FunctionComponent } from 'react';
import type { Word } from '../../api/get-words';
import styled from 'styled-components';
import { hintGray, red, white } from '../../color';
import { decodeUnicode } from '../../util/decode-unicode';
import play from '../../asset/image/play.png';
import { Center } from '../common/center';

interface Props {
  words: Word[];
  moreWords: boolean;
  searchMoreWords: () => Promise<void>;
}

const Section = styled.div`
  padding: 15px 40px;
  border-bottom: 1px solid ${hintGray};
  line-height: 20px;
`;

const Title = styled.span`
  display: inline-block;
  height: 20px;
  margin-right: 15px;
  font-weight: bold;
  font-size: 16px;
`;

const Pronunciation = styled.span`
  display: inline-block;
  font-family: arial, sans-serif;
  height: 20px;
  margin-right: 10px;
  font-size: 16px;
`;

const Definition = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 14px;
`;

const Play = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  vertical-align: top;
`;

const MoreButton = styled.div`
  padding: 10px 15px;
  color: ${white};
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  background: ${red};
  margin: 30px 0;
  cursor: pointer;
`;

const Words: FunctionComponent<Props> = ({ words, moreWords, searchMoreWords }) => {
  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
  const createPlayAudio = (audioUrl: string) => {
    return () => {
      playAudio(audioUrl);
    };
  };

  const wordSections = words.map((word) => {
    const audioUrl = word.us_audio.replace(/^http/, 'https');
    return (
      <Section key={word.word}>
        <Title>{word.word}</Title>
        <Pronunciation>{`/ ${decodeUnicode(word.us_pron)} /`}</Pronunciation>
        <Play src={play} onClick={createPlayAudio(audioUrl)} />
        <Definition>{decodeUnicode(word.definition)}</Definition>
      </Section>
    );
  });
  return (
    <>
      {wordSections}
      {moreWords ? (
        <Center>
          <MoreButton onClick={searchMoreWords}>查看更多</MoreButton>
        </Center>
      ) : null}
    </>
  );
};

export { Words };
