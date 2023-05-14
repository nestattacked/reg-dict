import React, { FunctionComponent } from 'react';
import { Word } from '../../../../api/search';
import styled from 'styled-components';
import { blackBlue } from '../../../../color';
import { useTranslation } from 'react-i18next';

const Link = styled.a`
  color: ${blackBlue};
  font-size: 16px;
  margin-right: 8px;
`;

interface Props {
  word: Word;
}

const External: FunctionComponent<Props> = ({ word }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link href={`http://www.iciba.com/word?w=${word.word}`} target="_blank">
        {t('iciba')}
      </Link>
      <Link
        href={`https://skell.sketchengine.eu/#result?lang=en&query=${word.word}&f=concordance`}
        target="_blank"
      >
        {t('skell')}
      </Link>
      <Link
        href={`https://youglish.com/pronounce/${word.word}/english?`}
        target="_blank"
      >
        {t('youglish')}
      </Link>
      <Link href={`https://www.baidu.com/s?wd=${word.word}`} target="_blank">
        {t('baidu')}
      </Link>
      <Link href={`https://google.com/search?q=${word.word}`} target="_blank">
        {t('google')}
      </Link>
      <Link
        href={`https://simple.wikipedia.org/wiki/${word.word}`}
        target="_blank"
      >
        {t('simpleWiki')}
      </Link>
    </>
  );
};

export { External };
