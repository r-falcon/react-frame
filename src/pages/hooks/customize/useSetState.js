import { useState } from 'react';

/**
 * 拥有和class组件中setState一样的功能，只需要添加有修改的部门state就会自动合并更新
 */

const useSetState = initialState => {
  const [state, setState] = useState(initialState);
  const set = value => {
    setState({
      ...state,
      ...(value instanceof Function ? value(state) : value),
    });
  };

  return [state, set];
};

export default useSetState;
