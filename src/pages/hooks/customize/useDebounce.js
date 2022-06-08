import { useState, useEffect } from 'react';

/**
 * 为防止api函数频繁请求接口，并防止筛选条件过多的时候忘记为每一个都添加防抖函数
 * 可以封装一个对state防抖的函数，通过它拿到的数据，再去做api请求
 */

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 在delay时间后更新debounceValue值
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
