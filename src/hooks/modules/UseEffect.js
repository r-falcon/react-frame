import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   document.title = `Click ${count} times`
  // })

  // 清除effect副作用
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('start a timer')
      setCount((count) => count + 1)
    }, 1000)

    // 在组件卸载前和下一个effect执行前执行
    return () => {
      console.log('clear a timer')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <p>useEffect count is:{count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </div>
  )
}

export default UseEffect
