import { useEffect } from 'react';
import useFirstMount from './useFirstMount';

/**
 * 忽略首次执行，只在依赖项发生变化时去执行某些逻辑
 */

const useUpdate = (effect, deps) => {
  const isFirstMount = useFirstMount();

  useEffect(() => {
    if (!isFirstMount) {
      return effect(); //二次渲染才执行
    }
  }, deps);
};

export default useUpdate;
