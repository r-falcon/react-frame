import { useEffect, useRef } from 'react';

/**
 * 仅需要在组件卸载时触发一些逻辑（清除定时器、重置一些状态）
 */

const useUnMount = fn => {
  // useEffect(() => () => fn(), []);
  // 为了能拿到实时数据，修改
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => () => fnRef.current(), []);
};

export default useUnMount;
