import React, { FunctionComponent } from 'react';
import { Word } from '../../../../api/search';
import styled from 'styled-components';
import { blackBlue } from '../../../../color';
import { SVGButton } from '../../../common/svg-button';
import audioSvg from '../../../../asset/audio.svg';
import { useTranslation } from 'react-i18next';

const Phonogram = styled.div`
  display: inline-block;
  font-size: 17px;
  color: ${blackBlue};
  margin-right: 13px;
`;

const NoPhonogram = styled(Phonogram)`
  font-size: 16px;
`;

interface Props {
  word: Word;
}

const Pronunciation: FunctionComponent<Props> = ({ word }) => {
  const { t } = useTranslation();

  const play = (): void => {
    const audio = new Audio(word.audio);
    audio.loop = false;
    audio.play();
  };

  const noPhonogram = <NoPhonogram>{t('emptyPhonogram')}</NoPhonogram>;
  const phonogram = <Phonogram>{`/${word.phonogram}/`}</Phonogram>;
  const button = (
    <SVGButton
      svg={audioSvg}
      width={22}
      height={22}
      borderRadius={22}
      svgWidth={12}
      svgHeight={12}
      onClick={play}
    />
  );
  return (
    <>
      {word.phonogram.length > 0 ? phonogram : noPhonogram}
      {button}
    </>
  );
};

export { Pronunciation };
