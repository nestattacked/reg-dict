import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { transparentBlackBlue } from '../../color';
import { Center } from './center';
import { stopPropagation } from '../../util/mouse-handler';

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${transparentBlackBlue};
`;

const Core = styled.video`
  width: 100%;
  max-width: 600px;
`;

interface Props {
  video?: string;
  setVideo: (video?: string) => void;
}

const Video: FunctionComponent<Props> = ({ video, setVideo }) => {
  const close = (): void => {
    setVideo();
  };

  if (video === undefined) {
    return null;
  } else {
    return (
      <Container onClick={close}>
        <Center>
          <Core
            src={video}
            controls={true}
            autoPlay={true}
            onClick={stopPropagation}
          />
        </Center>
      </Container>
    );
  }
};

export { Video };
