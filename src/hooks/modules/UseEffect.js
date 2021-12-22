import React, { useEffect, useState } from 'react'

/**
 * componentDidMount、componentDidUpdate、componentWillUnmount 相当于useEffect生命周期钩子的合并
 * 原来class组件中存在的问题：代码复用、代码分散
 * useEffect:
 *  1.第一个参数为匿名函数，会在每次render后执行里面的函数
 *  2.可以直接拿到props和state，不用通过this
 */

function UseEffect() {
  const [count, setCount] = useState(0)

  /**
   * useEffect 第二个参数传递变量
   * 1.第二个参数可以不传，不会报错，浏览器会无限循环执行逻辑处理函数
   * 2.第二个参数为空数组，逻辑处理函数只会在组件挂载时执行一次[componentDidMount + componentWillUnmount]
   * 3.第二个参数不为空，在首次挂载时执行和变量更新时执行[componentDidMount + componentDidUpdate]
   * 4.第一个参数可以返回一个回调，这个回调函数将会在组件被摧毁之前和再一次触发更新时，将之前的副作用清除掉[componentWillUnmount]
   */

  // useEffect(() => {
  //   document.title = `Click ${count} times`
  // })

  // 清除effect副作用
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('start a timer')
  //     setCount((count) => count + 1)
  //   }, 1000)

  //   // 在组件卸载前和下一个effect执行前执行
  //   -此时如果回调函数的第二个参数为空数组，只在挂载时执行一次，但是在setInterval回调中，count的值不会发生变化，所以将第二个参数置为count
  //   return () => {
  //     console.log('clear a timer')
  //     clearInterval(timer)
  //   }
  // }, [])

  // 优化effect - 通过useEffect的第二个参数创建订阅
  useEffect(() => {
    document.title = `Click ${count} times`
  }, [count])

  return (
    <div>
      <p>useEffect count is:{count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </div>
  )
}

export default UseEffect
