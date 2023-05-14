import { keyframes, css } from 'styled-components';

const rotateyKeyframes = keyframes`
  0% {
    transform: rotateY(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0deg);
  }
`;

const rotateY = css`
  animation: ${rotateyKeyframes} 2s ease-in-out infinite;
`;

export { rotateY };
