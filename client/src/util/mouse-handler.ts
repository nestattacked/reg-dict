import { MouseEvent } from 'react';

const preventDefault = (event: MouseEvent): void => {
  event.preventDefault();
};

const stopPropagation = (event: MouseEvent): void => {
  event.stopPropagation();
};

export { preventDefault, stopPropagation };
