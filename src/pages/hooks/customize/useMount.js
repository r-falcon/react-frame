import { useEffect } from 'react';

/**
 * 仅需要在组件初次渲染时执行某些逻辑（项目中相关配置的请求）
 */

const useMount = callback => {
  useEffect(callback, []);
};

export default useMount;
