import { useEffect, useRef, useState } from 'react';
import useUnMount from './useUnMount';

const useThrottleEffect = (fn, args, delay = 200) => {
  const [state, setState] = useState(null);
  const timeout = useRef();
  const nextArgs = useRef();

  useEffect(() => {
    if (timeout.current) {
      nextArgs.current = args;
    } else {
      setState(fn(...args));
      const timeoutCallback = () => {
        if (nextArgs.current) {
          setState(fn(...nextArgs.current));
          nextArgs.current = undefined;
        }
        timeout.current = undefined;
      };
      timeout.current = setTimeout(timeoutCallback, delay);
    }
  });

  useUnMount(() => {
    timeout.current && clearTimeout(timeout.current);
  });

  return state;
};

export default useThrottleEffect;
