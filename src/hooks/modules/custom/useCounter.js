import { useState } from 'react'

function useCounter(initialValue = 0, value = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount((count) => count + value)
  }

  const decrement = () => {
    setCount((count) => count - value)
  }

  const reset = () => {
    setCount(initialValue)
  }

  return [count, increment, decrement, reset]
}

export default useCounter
