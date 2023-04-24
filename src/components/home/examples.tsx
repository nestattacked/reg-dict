import React from 'react';
import type { FunctionComponent } from 'react';
import styled from 'styled-components';
import { hintGray } from '../../color';

const Section = styled.div`
  padding: 10px 25px;
  border-bottom: 1px solid ${hintGray};
`;

const Title = styled.h1`
  font-size: 22px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
`;

const Content = styled.p`
  line-height: 1.7;
`;

const Examples: FunctionComponent = () => {
  return (
    <>
      <Section>
        <Title>regdict简介</Title>
        <Content>
          regdict来源于一个简单的想法，正则查单词或者词根查单词，常见的单词会排在前面。目前支持任意匹配和字符匹配两种方式，以后会根据需求添加新的规则
        </Content>
      </Section>
      <Section>
        <Title>基本规则</Title>
        <Content>
          * 表示匹配任意个字母（零个或多个）<br></br> . 表示匹配一个字母
        </Content>
      </Section>
      <Section>
        <Title>精确查询</Title>
        <Subtitle>fantasy</Subtitle>
        <Content>查看单词fantasy</Content>
      </Section>
      <Section>
        <Title>前缀查询</Title>
        <Subtitle>pro*</Subtitle>
        <Content>查看前缀为pro的单词</Content>
      </Section>
      <Section>
        <Title>后缀查询</Title>
        <Subtitle>*lity</Subtitle>
        <Content>查看后缀为lity的单词</Content>
      </Section>
      <Section>
        <Title>固定长度查询</Title>
        <Subtitle>z....</Subtitle>
        <Content>查看z开头含有五个字母的单词</Content>
      </Section>
    </>
  );
};

export { Examples };
