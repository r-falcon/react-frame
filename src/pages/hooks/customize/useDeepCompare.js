import { useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

/**
 * 由于useEffect中的浅比较机制，（在分页参数相同的时候会触发一些问题，当用户选择相同的pageNum，pageSize时依然会触发更新
 */

const depsEqual = (aDeps, bDeps = []) => {
  return isEqual(aDeps, bDeps);
};

const useDeepCompare = (effect, deps) => {
  const ref = useRef();
  const singleRef = useRef(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    singleRef.current += 1;
  }

  useEffect(effect, [singleRef.current]);
};

export default useDeepCompare;
