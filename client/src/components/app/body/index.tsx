import React, { FunctionComponent } from 'react';
import { Guide } from './guide';
import { Words } from './words';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';
import { SearchTask } from '../../../hook/use-search';

interface Props {
  task: SearchTask | undefined;
  moreSearch: () => Promise<void>;
  setVideo: (video?: string) => void;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
`;

const Body: FunctionComponent<Props> = ({ task, moreSearch, setVideo }) => {
  const core =
    task !== undefined ? (
      <Words task={task} moreSearch={moreSearch} setVideo={setVideo} />
    ) : (
      <Guide />
    );
  return (
    <Container>
      <Scrollbars autoHide={true} autoHideTimeout={100}>
        {core}
      </Scrollbars>
    </Container>
  );
};

export { Body };
