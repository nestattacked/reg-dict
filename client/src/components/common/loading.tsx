import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { blackBlue, white } from '../../color';
import { rotateY } from '../../style/rotate-y';

const Container = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  background-color: ${blackBlue};
  color: ${white};
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  ${rotateY}
`;

interface Props {
  className?: string;
}

const Loading: FunctionComponent<Props> = ({ className }) => {
  return <Container className={className}>R</Container>;
};

export { Loading };
