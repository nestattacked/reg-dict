import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { backgroundGrey } from '../../../color';
import { KeyButton } from './key-button';
import { SVGButton as BasicSVGButton } from '../../common/svg-button';
import deleteSvg from '../../../asset/delete.svg';
import searchSvg from '../../../asset/search.svg';
import { preventDefault } from '../../../util/mouse-handler';

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  padding: 10px;
  background-color: ${backgroundGrey};
  flex-wrap: wrap;
  left: 30px;
  right: 30px;
  border-radius: 10px;
  justify-content: center;
`;

const SVGButton = styled(BasicSVGButton)`
  margin: 2px;
`;

const PlaceHolder = styled.div`
  width: 30px;
  margin: 0 2px;
`;

interface Props {
  keyboardOpened: boolean;
  type: string;
  pattern: string;
  search: (type: string, pattern: string) => Promise<void>;
  ins: (character: string) => void;
  del: () => void;
}

const Keyboard: FunctionComponent<Props> = ({
  keyboardOpened,
  type,
  pattern,
  search,
  ins,
  del
}) => {
  if (!keyboardOpened) {
    return null;
  }

  let labels: string[] = [];
  if (type === 'alphabet') {
    labels = [
      ...labels,
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
  } else {
    labels = [
      ...labels,
      'ɑ',
      'æ',
      'ʌ',
      'ə',
      'ɔ',
      'aʊ',
      'aɪ',
      'b',
      'tʃ',
      'd',
      'ð',
      'ɛ',
      'ɝ',
      'eɪ',
      'f',
      'g',
      'h',
      'ɪ',
      'i',
      'dʒ',
      'k',
      'l',
      'm',
      'n',
      'ŋ',
      'o',
      'ɔɪ',
      'p',
      'r',
      's',
      'ʃ',
      't',
      'θ',
      'ʊ',
      'u',
      'v',
      'w',
      'j',
      'z',
      'ʒ'
    ];
  }
  labels = [...labels, '.', '+', '*', '?', '(', ')'];

  const buttons = labels.map((label) => {
    const insert = (): void => {
      ins(label);
    };
    return <KeyButton label={label} onClick={insert} key={label} />;
  });

  buttons.push(
    <SVGButton
      key="delete"
      svg={deleteSvg}
      width={30}
      height={30}
      svgWidth={14}
      svgHeight={14}
      borderRadius={8}
      onClick={del}
    />
  );

  const enter = async (): Promise<void> => {
    search(type, pattern);
  };
  buttons.push(
    <SVGButton
      key="search"
      svg={searchSvg}
      width={30}
      height={30}
      svgWidth={14}
      svgHeight={14}
      borderRadius={8}
      onClick={enter}
    />
  );

  for (let i = 0; i < 18; i++) {
    buttons.push(<PlaceHolder key={`placeholder-${i}`} />);
  }

  return <Container onMouseDown={preventDefault}>{buttons}</Container>;
};

export { Keyboard };
