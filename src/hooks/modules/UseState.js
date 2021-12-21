import { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0)

  const lazyAdd = () => {
    setTimeout(() => {
      setCount((count) => Number(count) + 2)
    }, 2000)
  }

  return (
    <div>
      <p>hook count is:{count}</p>
      <button onClick={() => setCount(count - 1)}>count--</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count++</button>
      <button onClick={lazyAdd}>function update count++</button>
    </div>
  )
}

export default UseState
