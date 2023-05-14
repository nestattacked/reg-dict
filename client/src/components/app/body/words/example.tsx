import React, { FunctionComponent } from 'react';
import { Word } from '../../../../api/search';
import styled from 'styled-components';
import { blackBlue } from '../../../../color';
import { getRandomKey } from '../../../../util/get-random-key';
import { useTranslation } from 'react-i18next';
import { join } from '../../../../util/join';
import { SVGButton as BasicSVGButton } from '../../../common/svg-button';
import videoSvg from '../../../../asset/video.svg';
import { Row as BasicRow } from '../../../common/flex';

const Text = styled.div`
  color: ${blackBlue};
  font-size: 17px;
  line-height: 22px;
`;

const EmptyText = styled(Text)`
  font-size: 16px;
`;

const SVGButton = styled(BasicSVGButton)`
  flex: 0 0 auto;
  margin-left: 14px;
`;

const Row = styled(BasicRow)`
  margin: 8px 0;
`;

interface Props {
  word: Word;
  setVideo: (video?: string) => void;
}

const Example: FunctionComponent<Props> = ({ word, setVideo }) => {
  const { t } = useTranslation();

  if (word.examples.length === 0) {
    return <EmptyText>{t('emptyExamples')}</EmptyText>;
  }

  const items = word.examples.map((example) => {
    const play = (): void => {
      setVideo(example.video);
    };
    return (
      <Row key={getRandomKey()}>
        <Text>{join(example.words)}</Text>
        <SVGButton
          svg={videoSvg}
          width={22}
          height={22}
          borderRadius={22}
          svgWidth={8}
          svgHeight={8}
          onClick={play}
        />
      </Row>
    );
  });
  return <>{items}</>;
};

export { Example };
