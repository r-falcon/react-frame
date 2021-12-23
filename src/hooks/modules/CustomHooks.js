import { Fragment, useState } from 'react'
import useDocumentTitle from './custom/useDocumentTitle'
import useCounter from './custom/useCounter'

function CustomHooks() {
  return (
    <Fragment>
      <Demo />
    </Fragment>
  )
}

function Demo() {
  // const initialValue = 0
  // const [count, setCount] = useState(initialValue)

  // 封装useCounter
  const [count, increment, decrement, reset] = useCounter(10, 5)

  // 封装useDocumentTitle
  useDocumentTitle(count)

  // const increment = () => {
  //   setCount((count) => count + 1)
  // }

  // const decrement = () => {
  //   setCount((count) => count - 1)
  // }

  // const reset = () => {
  //   setCount(initialValue)
  // }

  return (
    <div>
      <p>customDocumentTitle. current count is:{count}</p>
      <button onClick={increment}>count++</button>
      <button onClick={decrement}>count--</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CustomHooks
