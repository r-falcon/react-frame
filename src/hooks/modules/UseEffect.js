import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Click ${count} times`
  })

  return (
    <div>
      <p>useEffect count is:{count}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </div>
  )
}

export default UseEffect
