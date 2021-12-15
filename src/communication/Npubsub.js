import React from 'react'
import Pubsub from 'pubsub-js'

const pubsubID = '20211215'

/**
 * PubSub.publish('名称', argument)			//发布消息
 * PubSub.subscrib('名称', (msg,argument) => {} )		//订阅消息
 * PubSub.unsubscrib('名称')			//取消订阅
 */

class Npubsub extends React.Component {
  componentDidMount() {
    console.log('did mounted')
    // 订阅
    Pubsub.subscribe(pubsubID, (msg, data) => {
      console.log(msg) //pubsubID 属性值
      console.log(data) //传递的参数属性值
    })
  }

  componentWillUnmount() {
    /**
     * 取消指定订阅
     */
    Pubsub.unsubscribe(pubsubID)
    /**
     * 取消全部订阅
     */
    Pubsub.clearAllSubscriptions()
  }

  render() {
    return null
  }
}

// 发布消息
Pubsub.publish(pubsubID, { name: 'falcon', age: 21, flag: true })

export default Npubsub
