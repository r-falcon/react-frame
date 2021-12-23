import React, { Fragment, useEffect, useRef, useState } from 'react'

/**
 * ref适用案例：
 * 1.管理焦点、文本选择、媒体播放
 * 2.触发强制动画
 * 3.集成第三方dom库
 * 注意：
 * 1.勿过度使用ref
 * 2.让更高的组件拥有state
 */

function UseRef() {
  return (
    <Fragment>
      <InputFocus />
      <NormalStop />
      <RefStop />
    </Fragment>
  )
}

/**
 * 示例1：获取input输入框焦点 - 访问DOM节点
 */
function InputFocus() {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

/**
 * 示例2：停止计时器的计时 - 成为一个容器，缓存变量
 */
class NormalStop extends React.Component {
  state = {
    timer: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>normal current timer is:{this.state.timer}</p>
        <button
          onClick={() => {
            clearInterval(this.interval)
          }}
        >
          normal clear
        </button>
      </div>
    )
  }
}

function RefStop() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  })

  return (
    <div>
      <p>hook current timer is：{timer}</p>
      <button
        onClick={() => {
          clearInterval(intervalRef.current)
        }}
      >
        hook clear
      </button>
    </div>
  )
}

export default UseRef
