import { useState } from 'react'

/**
 * 可以在函数式组件中使用state
 * 在类组件中，state是一个对象；useState中，state可以是任何类型
 * state的两个参数【第一个当前值，第二个state的setter方法，调用会触发render】
 * 对象和数组，state不会自动更新补全，需要借助展开运算符
 * setState,会合并状态返回一个新的状态；useState,会用新状态替换原来的状态
 */

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
      {/* 当useState中state为对象/数组时，useState不会自动合并更新对象，可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果 */}
      <div>
        <ObjectState />
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

function ObjectState() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const [arr, setArr] = useState([])

  return (
    <div>
      <p>
        Your fullName is:{name.firstName} {name.lastName}
      </p>
      <input
        type="text"
        value={name.firstName}
        // 注：下面这种写法是错误的，只对对象的一个属性进行了操作，另一个属性值会消失
        // onChange={(e) => setName({ firstName: e.target.value })}
        // 正确做法：借助展开运算符完成对象的合并和更新
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        // onChange={(e) => setName({ lastName: e.target.value })}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>current Array is : {arr}</p>
      <button onClick={() => setArr([...arr, arr.push(arr.length)])}>
        push a value
      </button>
    </div>
  )
}

export default UseState
