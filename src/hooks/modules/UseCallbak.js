import React, { Fragment, useState } from 'react'

function UseCallback() {
  return (
    <Fragment>
      {/* 每次状态改变都触发render，性能问题有待考虑，减少不必要的渲染 */}
      <Parent />
      {/* 使用React.memo 进行性能优化 */}
    </Fragment>
  )
}

function Parent() {
  const [age, setAage] = useState(18)
  const [salary, setSalary] = useState(8000)
  const incrementAge = () => {
    setAage(age + 1)
  }
  const incrementSalary = () => {
    setSalary(salary + 1000)
  }

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      {/* 有一个问题：当点击age按钮的时候，incrementSalary方法被重新创建，所以传入了新的props，触发了两个函数，没能阻止rerender，解决：useCallback */}
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}
// 以下几个函数通过React.memo进行改进,不必要渲染
// function Title() {
//   console.log('title')
//   return <div>useCallback()</div>
// }
const Title = React.memo((props) => {
  console.log('title')
  return <div>useCallback()</div>
})
const Count = React.memo((props) => {
  console.log(`count:${props.text}`)
  return (
    <div>
      {props.text} - {props.count}
    </div>
  )
})
// function Count(props) {
//   console.log(`count:${props.text}`)
//   return (
//     <div>
//       {props.text} - {props.count}
//     </div>
//   )
// }
const Button = React.memo((props) => {
  console.log(`button:${props.handleClick}`)
  return <button onClick={props.handleClick}>{props.children}</button>
})
// function Button(props) {
//   console.log(`button:${props.handleClick}`)
//   return <button onClick={props.handleClick}>{props.children}</button>
// }

export default UseCallback
