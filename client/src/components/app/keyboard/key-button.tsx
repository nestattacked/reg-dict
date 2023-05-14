import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { blackBlue, white } from '../../../color';

const Container = styled.div`
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 8px;
  text-align: center;
  margin: 2px;
  background-color: ${blackBlue};
  color: ${white};
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

interface Props {
  label: string;
  onClick: () => void;
}

const KeyButton: FunctionComponent<Props> = ({ label, onClick }) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export { KeyButton };
