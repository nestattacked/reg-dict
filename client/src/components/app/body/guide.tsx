import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { blackBlue, orange } from '../../../color';
import { useTranslation } from 'react-i18next';
import { Row as BasicRow } from '../../common/flex';
import { SVGButton } from '../../common/svg-button';
import githubSvg from '../../../asset/github.svg';
import yooolinkSvg from '../../../asset/yooolink.svg';

const Title = styled.h1`
  margin: 18px 0 8px;
  font-size: 20px;
  color: ${blackBlue};

  &:first-child {
    margin-top: 0;
  }
`;

const Row = styled(BasicRow)`
  height: auto;
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1.6;
  color: ${blackBlue};
`;

const Logo = styled(SVGButton)`
  margin-right: 10px;
  flex: 0 0 auto;
`;

const Description = styled.p`
  margin: 0 0 6px;
  font-size: 16px;
  line-height: 1.6;
  color: ${blackBlue};
`;

const Link = styled.a`
  margin-left: 10px;
  color: ${blackBlue};
  flex: 0 0 auto;
`;

const Pattern = styled.p`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: bold;
  color: ${orange};
`;

const Guide: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('guide1Title')}</Title>
      <Description>{t('guide1Description')}</Description>
      <Title>{t('guide2Title')}</Title>
      <Row>
        <Logo
          svg={githubSvg}
          width={26}
          height={26}
          borderRadius={26}
          svgWidth={14}
          svgHeight={14}
        />
        {t('guide2Description1')}
        <Link href="https://github.com/nestattacked/reg-dict" target="_blank">
          {t('guide2Description1Link')}
        </Link>
      </Row>
      <Row>
        <Logo
          svg={yooolinkSvg}
          width={26}
          height={26}
          borderRadius={26}
          svgWidth={16}
          svgHeight={16}
        />
        {t('guide2Description2')}
        <Link href="https://yooolink.com" target="_blank">
          {t('guide2Description2Link')}
        </Link>
      </Row>
      <Title>{t('guide3Title')}</Title>
      <Description>{t('guide3Description1')}</Description>
      <Description>{t('guide3Description2')}</Description>
      <Description>{t('guide3Description3')}</Description>
      <Description>{t('guide3Description4')}</Description>
      <Description>{t('guide3Description5')}</Description>
      <Title>{t('guide4Title')}</Title>
      <Pattern>{t('guide4Pattern')}</Pattern>
      <Description>{t('guide4Description')}</Description>
      <Title>{t('guide5Title')}</Title>
      <Pattern>{t('guide5Pattern')}</Pattern>
      <Description>{t('guide5Description')}</Description>
      <Title>{t('guide6Title')}</Title>
      <Pattern>{t('guide6Pattern')}</Pattern>
      <Description>{t('guide7Description')}</Description>
      <Title>{t('guide7Title')}</Title>
      <Pattern>{t('guide7Pattern')}</Pattern>
      <Description>{t('guide7Description')}</Description>
      <Title>{t('guide8Title')}</Title>
      <Pattern>{t('guide8Pattern')}</Pattern>
      <Description>{t('guide8Description')}</Description>
    </>
  );
};

export { Guide };
