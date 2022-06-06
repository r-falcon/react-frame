import React from 'react';
import { useState, useEffect } from 'react';

/**
 * Effect 副作用
 *  指那些没有发生在数据向视图转化过程中的逻辑（ajax请求、访问原生dom元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志）
 */

/**
 * useEffect
 *  是componentDidMount、componentdidUpdate、componentWillUnmount 三个组合API
 *  接受一个函数，该函数在组件渲染到屏幕之后（render后）执行；要么返回能清除副作用的函数，要么不返回任何内容
 * 不会阻塞浏览器更新屏幕，使得应用看起来更新更快
 */

/**
 * useLayoutEffect
 *  通过同步执行状态，解决一些特定场景下的页面闪烁问题
 *  useEffect在全部渲染完毕之后才会执行，useLayoutEffect在浏览器layout之后，painting之前
 *  可以用其来读取DOM布局并同步触发重渲染
 * 尽可能使用标准useEffect，以免阻塞视图更新
 */

const EffectFunc = () => {
  let [value, setValue] = useState(10);

  /**
   * 第一个参数可以返回一个回调，这个回调函数将会在组件被摧毁之前和再一次触发更新时，将之前的副作用清除掉（清除定时器、清除事件监听等）
   */
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('start a timer');
  //     setValue(value => value + 1);
  //   }, 1000);

  //   return () => {
  //     console.log('clear timer');
  //     clearInterval(timer);
  //   };
  // }, []);

  /**
   * 第二个参数不传,每次渲染都会执行effect
   */
  // useEffect(() => {
  //   console.log('执行了');
  // });
  /**
   * 第二个参数传入空数组[]，只会在组件挂载时执行一次
   */
  // useEffect(() => {
  //   console.log('执行了');
  // }, []);
  /**
   * 第二个参数不为空，在组件挂载和变量更新时执行
   */
  // useEffect(() => {
  //   console.log('执行了');
  // }, [value]);

  let addValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <p>value is : {value}</p>
      <button onClick={addValue}>value++</button>
    </div>
  );
};

export default EffectFunc;
