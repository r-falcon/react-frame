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
      <button onClick={() => setCount(Number(count) + 1)}>count++</button>
      {/* 函数式更新:可以向setState中传递一个函数 */}
      <button onClick={lazyAdd}>function update count++</button>
      {/* 惰性初始state:如果state需要通过复杂的计算得到，则可以通过向useState中传递一个函数来初始化state，此函数只会在初始渲染时被调用 */}
      <div>
        <LazyState count={count} />
      </div>
      {/* 跳过state更新:React 将使用 Object.is 来比较前后两次 state，如果返回结果为 true，React 将跳过子组件的渲染及 effect 的执行 */}
      <div>
        <NotUpdate count={count} />
      </div>
      {/* previous state.当state值依赖上一个状态值时，需要通过function的方式传入value并返回变化后的 */}
      <div>
        <PreviousState count={count} />
      </div>
    </div>
  )
}

function LazyState(props) {
  const initCounter = () => {
    return { number: props.count + 2 }
  }

  const [counter, setCounter] = useState(initCounter)

  return (
    <div>
      <p>lazy state counter is:{counter.number}</p>
      <button onClick={() => setCounter({ number: counter.number - 1 })}>
        counter--
      </button>
      <input
        type="text"
        value={counter.number}
        onChange={(e) => setCounter({ number: e.target.value })}
      />
      <button
        onClick={() => setCounter({ number: Number(counter.number) + 1 })}
      >
        counter++
      </button>
    </div>
  )
}

function NotUpdate(props) {
  const [value, setValue] = useState({ number: props.count })

  return (
    <div>
      <p>not update value is:{value.number}</p>
      <button
        onClick={() => {
          console.log('update')
          setValue({ number: value.number + 1 })
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          console.log('not update')
          setValue(value)
        }}
      >
        not update
      </button>
    </div>
  )
}

function PreviousState(props) {
  const initialValue = props.count
  const [num, setNum] = useState(initialValue)

  return (
    <div>
      <p>previous num is:{num}</p>
      <button onClick={() => setNum((num) => num + 1)}>num++</button>
      <button onClick={() => setNum((num) => num + 5)}>num+5</button>
      <button onClick={() => setNum(initialValue)}>reset</button>
    </div>
  )
}

export default UseState
