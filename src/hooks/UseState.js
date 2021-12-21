import { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>hook count is:{count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </div>
  )
}

export default UseState
