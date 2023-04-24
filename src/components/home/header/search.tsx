import React from 'react';
import type { FunctionComponent, ChangeEvent, KeyboardEvent } from 'react';
import { Flex, Row } from '../../common/flex';
import styled from 'styled-components';
import { black, gray, intenseOpacity, opacitiedColor, red, strongOpacity, white } from '../../../color';
import { Center } from '../../common/center';

interface SearchProps {
  showExamples: () => void;
  searchKey: string;
  setSearchKey: (key: string) => void;
  searchWords: (key: string) => Promise<void>;
}

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #cc0000;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;
  padding: 5px 15px;
  font-size: 16px;
  background: ${opacitiedColor(gray, strongOpacity)};
  box-shadow: inset 0 1px 1px ${opacitiedColor(black, intenseOpacity)};
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  background: ${red};
  font-size: 20px;
  font-weight: bold;
  color: ${white};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;

const Search: FunctionComponent<SearchProps> = ({ searchKey, setSearchKey, showExamples, searchWords }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      searchWords(searchKey);
    }
  };

  return (
    <Row>
      <Flex size={1}>
        <Input placeholder="search" value={searchKey} onChange={onChange} onKeyPress={handleKeyPress} />
      </Flex>
      <Button onClick={showExamples}>
        <Center>?</Center>
      </Button>
    </Row>
  );
};

export { Search };
export type { SearchProps };
