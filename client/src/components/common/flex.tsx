import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Column = styled(Row)`
  flex-direction: column;
`;

const CenterRow = styled(Row)`
  justify-content: center;
`;

const CenterColumn = styled(Column)`
  justify-content: center;
`;

interface Props {
  size: number;
  expand?: boolean;
}

interface MergeProps {
  expand: boolean;
}

const Flex = styled.div.attrs<Props, MergeProps>((props) => ({
  expand: props.expand === undefined
}))<Props>`
  min-width: 0;
  min-height: 0;
  flex: ${(props) => props.size} ${(props) => props.size} 0;
  ${(props) => (props.expand ? 'align-self: stretch;' : '')}
`;

export { Row, Column, CenterRow, CenterColumn, Flex };
