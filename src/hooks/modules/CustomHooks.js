import { Fragment, useState } from 'react'
import useDocumentTitle from './custom/useDocumentTitle'
import useCounter from './custom/useCounter'
import useInput from './custom/useInput'

function CustomHooks() {
  return (
    <Fragment>
      <Demo />
      <FormDemo />
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

function FormDemo() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // 封装useInput
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`Hello,${firstName}-${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First Name</label>
          {/* <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /> */}
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          {/* <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /> */}
          <input type="text" {...bindLastName} />
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default CustomHooks
