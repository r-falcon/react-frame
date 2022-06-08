import { useRef, useState } from 'react';
import useUnMount from './useUnMount';
import useUpdate from './useUpdate';

/**
 * 主要用在下拉加载、上拉刷新的场景中
 */

const useThrottle = (initialState, delay) => {
  const [state, setState] = useState(initialState);
  const timeout = useRef();
  const nextValue = useRef(null);
  const hasNextValue = useRef(false);

  useUpdate(() => {
    if (timeout.current) {
      nextValue.current = initialState;
      hasNextValue.current = true;
    } else {
      setState(initialState);
      const timeoutCallback = () => {
        if (hasNextValue.current) {
          setState(nextValue.current);
          hasNextValue.current = false;
        }
        timeout.current = undefined;
      };
      timeout.current = setTimeout(timeoutCallback, delay);
    }
  }, [initialState]);

  useUnMount(() => {
    timeout.current && clearTimeout(timeout.current);
  });

  return state;
};

export default useThrottle;
