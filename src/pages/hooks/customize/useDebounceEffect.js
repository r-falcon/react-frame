import { useState, useEffect, useRef } from 'react';
import useUnMount from './useUnMount';
import useUpdate from './useUpdate';

const useDebounceEffect = (effect, deps, delay = 1000) => {
  const timeoutRef = useRef();
  const [refreshFlag, setRefreshFlag] = useState(true);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setRefreshFlag(!refreshFlag);
    }, delay);

    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [...deps, delay]);

  // 只有flag变化才执行
  useUpdate(effect, [refreshFlag]);

  useUnMount(
    () => () => timeoutRef.current && clearTimeout(timeoutRef.current)
  );
};

export default useDebounceEffect;
