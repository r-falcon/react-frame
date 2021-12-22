import React, { useContext, useState } from 'react'

/**
 * context api:在树组件中传递数据但不用每层都经过，不用为每层手动添加props
 * useContext:用于函数组件中订阅上层context的变更，获取上层context传递的value props值
 * const value = useContext(MyContext) context所取的当前值遵守就近原则
 */

const userInfo = {
  job: 'web',
  salary: 8000,
}

const InfoContext = React.createContext()

function UseContext(props) {
  const [user, setUser] = useState(userInfo)

  const handleUser = () => {
    setUser({ ...user, job: 'java' })
  }

  return (
    <InfoContext.Provider value={{ user, handleUser }}>
      <ChangeInfo />
    </InfoContext.Provider>
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

export default UseContext
