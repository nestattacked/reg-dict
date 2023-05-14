import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { white, blackBlue } from '../../color';
import { Center } from './center';
import { SVG } from './svg';

const Container = styled.div<{
  width: number;
  height: number;
  background: string;
  borderRadius: number;
}>`
  display: inline-block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius}px;
  cursor: pointer;
`;

interface Props {
  svg: string;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  svgWidth?: number;
  svgHeight?: number;
  background?: string;
  color?: string;
  borderRadius?: number;
}

const SVGButton: FunctionComponent<Props> = ({
  svg,
  className,
  onClick,
  width = 40,
  height = 40,
  svgWidth = 24,
  svgHeight = 24,
  background = blackBlue,
  color = white,
  borderRadius = 8
}) => {
  return (
    <Container
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      background={background}
      borderRadius={borderRadius}
    >
      <Center>
        <SVG file={svg} color={color} width={svgWidth} height={svgHeight} />
      </Center>
    </Container>
  );
};

export { SVGButton };
