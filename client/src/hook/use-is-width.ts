import { useMedia } from 'react-use';

const useIsWide = (): boolean => {
  const isWidth = useMedia('(min-width: 600px)');
  return isWidth;
};

export { useIsWide };
