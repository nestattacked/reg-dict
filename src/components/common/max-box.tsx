import styled from 'styled-components';

interface Props {
  maxWidth?: number;
  maxHeight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  autoHeight?: boolean;
}

const MaxBox = styled.div<Props>`
  width: 100%;
  ${(props) => (props.autoHeight !== undefined && props.autoHeight ? '' : 'height: 100%;')}
  padding-top: ${(props) => (props.paddingTop === undefined ? 0 : props.paddingTop)}px;
  padding-bottom: ${(props) => (props.paddingBottom === undefined ? 0 : props.paddingBottom)}px;
  padding-left: ${(props) => (props.paddingLeft === undefined ? 0 : props.paddingLeft)}px;
  padding-right: ${(props) => (props.paddingRight === undefined ? 0 : props.paddingRight)}px;
  ${(props) => (props.maxWidth !== undefined ? `max-width: ${props.maxWidth}px;` : '')}
  ${(props) => (props.maxHeight !== undefined ? `max-height: ${props.maxHeight}px;` : '')}
`;

export { MaxBox };
