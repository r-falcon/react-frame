import { useRef } from 'react';

/**
 * 判断是否首次渲染
 */
const useFirstMount = () => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
};

export default useFirstMount;
