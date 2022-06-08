import { useRef } from 'react';

/**
 * 解决useEffect闭包问题，获取到最新的值
 */

const useLatest = value => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
