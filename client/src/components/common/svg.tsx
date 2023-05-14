import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  color: string;
  file: string;
}

const SVG = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  mask-image: url('${(props) => props.file}');
  mask-size: ${(props) => props.width}px ${(props) => props.height}px;
  mask-repeat: no-repeat;
  mask-position: center;
`;

export { SVG };
