import React, { Fragment, useContext, memo, useMemo, useState } from 'react'

/**
 * context api:在树组件中传递数据但不用每层都经过，不用为每层手动添加props
 * useContext:用于函数组件中订阅上层context的变更，获取上层context传递的value props值
 * const value = useContext(MyContext) context所取的当前值遵守就近原则
 */

const userInfo = {
  job: 'web',
  salary: 8000,
}

const workInfo = {
  title: 'love and peace',
  lesson: 12,
}

const InfoContext = React.createContext()
// 优化消费context组件
const OptimizeContext = React.createContext()

function UseContext(props) {
  const [user, setUser] = useState(userInfo)
  const [work, setWork] = useState(workInfo)

  const handleUser = () => {
    setUser({ ...user, job: 'java' })
  }

  const handleWork = () => {
    setWork({ ...work, title: 'love me, love my dog' })
  }

  return (
    <Fragment>
      <InfoContext.Provider value={{ user, handleUser }}>
        <ChangeInfo />
      </InfoContext.Provider>

      <OptimizeContext.Provider value={{ work: work, handleWork: handleWork }}>
        <ChangeWork />
      </OptimizeContext.Provider>
    </Fragment>
  )
}

function ChangeInfo() {
  const { user, handleUser } = useContext(InfoContext)

  return (
    <div>
      <p>
        useContext. current info is:{user.job} - {user.salary}
      </p>
      <button onClick={handleUser}>change user</button>
    </div>
  )
}

function ChangeWork() {
  /**
   * 优化消费context组件：
   * 1.拆分不会一起更改的context. let work = useContext(OptimizeContext)
   * 2.当不能拆分context时，将组件一分为二，给中间件加上React.memo
   */
  let workValue = useContext(OptimizeContext)
  let work = workValue.work

  // 使用memo，尽量复用上一次渲染
  return <Memo work={work} />
  // 返回一个内置的useMemo组件
  // return useMemo(() => {
  //   return <MemoUse work={work} />
  // }, [work])
}

const Memo = memo(({ work }) => {
  return (
    <div>
      OptimizeContext with memo. current value is:{work.title} - {work.lesson}
    </div>
  )
})

// function MemoUse({ work }) {
//   return (
//     <div>
//       OptimizeContext with useMemo. current value is:{work.title} -{' '}
//       {work.lesson}
//     </div>
//   )
// }

export default UseContext
