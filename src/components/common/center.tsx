import React from 'react';
import type { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

interface Props {
  className?: string;
  children: ReactNode;
}

const Center: FunctionComponent<Props> = ({ className, children }) => {
  return (
    <Container className={className}>
      {React.Children.count(children) === 1 ? children : <div>{children}</div>}
    </Container>
  );
};

export { Center };
