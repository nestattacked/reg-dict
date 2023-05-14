import React, {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  RefObject
} from 'react';
import styled from 'styled-components';
import logoImage from '../../../asset/logo.png';
import { Column, Flex, Row } from '../../common/flex';
import { useIsWide } from '../../../hook/use-is-width';
import { Bar } from './bar';

interface Props {
  input: RefObject<HTMLInputElement>;
  type: string;
  pattern: string;
  toggleType: () => void;
  toggleKeyboard: () => void;
  update: (event: ChangeEvent<HTMLInputElement>) => void;
  enter: (event: KeyboardEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const DesktopContainer = styled.div`
  height: 100px;
  width: 100%;
`;

const DesktopSeperator = styled.div`
  width: 20px;
`;

const MobileContainer = styled.div`
  height: 160px;
  width: 100%;
`;

const MobileSeperator = styled.div`
  height: 20px;
`;

const Image = styled.img`
  height: 50px;
`;

const Header: FunctionComponent<Props> = ({
  input,
  type,
  pattern,
  toggleType,
  toggleKeyboard,
  update,
  enter,
  reset
}) => {
  const isWide = useIsWide();

  const logo = <Image src={logoImage} />;
  const bar = (
    <Bar
      input={input}
      type={type}
      pattern={pattern}
      toggleType={toggleType}
      toggleKeyboard={toggleKeyboard}
      update={update}
      enter={enter}
      reset={reset}
    />
  );

  return isWide ? (
    <DesktopContainer>
      <Row>
        {logo}
        <DesktopSeperator />
        <Flex size={1} expand={false}>
          {bar}
        </Flex>
      </Row>
    </DesktopContainer>
  ) : (
    <MobileContainer>
      <Column>
        <Flex size={1} />
        {logo}
        <MobileSeperator />
        {bar}
        <Flex size={1} />
      </Column>
    </MobileContainer>
  );
};

export { Header };
