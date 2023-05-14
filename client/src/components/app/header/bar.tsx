import React, {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  RefObject
} from 'react';
import styled from 'styled-components';
import { blackBlue, hint, white } from '../../../color';
import { Flex, Row } from '../../common/flex';
import { SVGButton as BasicSVGButton } from '../../common/svg-button';
import keyboardSvg from '../../../asset/keyboard.svg';
import questionSvg from '../../../asset/question.svg';
import { useTranslation } from 'react-i18next';
import { preventDefault, stopPropagation } from '../../../util/mouse-handler';

const Container = styled.div`
  width: 100%;
  height: 40px;
  border: 3px solid ${blackBlue};
  border-radius: 10px;
  padding: 5px;
`;

const SVGButton = styled(BasicSVGButton)`
  margin-left: 5px;
`;

const TypeButton = styled.div`
  height: 24px;
  line-height: 24px;
  background-color: ${blackBlue};
  color: ${white};
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  padding: 0 8px;
  margin-right: 5px;
  text-align: center;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 24px;
  padding: 0 6px;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${blackBlue};

  ::placeholder {
    font-size: 13px;
    font-weight: normal;
    color: ${hint};
  }
`;

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

const Bar: FunctionComponent<Props> = ({
  input,
  type,
  pattern,
  toggleType,
  toggleKeyboard,
  update,
  enter,
  reset
}) => {
  const { t } = useTranslation();
  const typeText = type === 'alphabet' ? t('alphabet') : t('phonogram');
  const placeholder = t('placeholder');

  return (
    <Container onMouseDown={preventDefault}>
      <Row>
        <TypeButton onClick={toggleType}>{typeText}</TypeButton>
        <Flex size={1}>
          <Input
            ref={input}
            value={pattern}
            onChange={update}
            onKeyDown={enter}
            placeholder={placeholder}
            onMouseDown={stopPropagation}
          />
        </Flex>
        <SVGButton
          svg={keyboardSvg}
          onClick={toggleKeyboard}
          width={34}
          height={24}
          svgWidth={24}
          svgHeight={18}
        />
        <SVGButton
          svg={questionSvg}
          onClick={reset}
          width={24}
          height={24}
          svgWidth={14}
          svgHeight={14}
        />
      </Row>
    </Container>
  );
};

export { Bar };
