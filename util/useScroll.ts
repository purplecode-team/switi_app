import { useRef, useState } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const scrollTimerId = useRef<number>(0);
  const onScroll = () => {
    if (!scroll) setScroll(true);
    if (scrollTimerId) clearTimeout(scrollTimerId.current);
    scrollTimerId.current = Number(setTimeout(() => setScroll(false), 250));
  };

  return { scrollOn: onScroll, scroll };
};

export default useScroll;
