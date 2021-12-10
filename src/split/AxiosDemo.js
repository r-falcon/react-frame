import React from 'react'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

// axios这个不支持json跨域，需要的话可以使用fetch-jsonp

class AxiosDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>hello axios</div>
  }
}

// axios请求案例
axios
  .get(
    'https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839'
  )
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  })

// fetchjsonp请求案例
fetchJsonp(
  'https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839'
)
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    console.log('parsed json', json)
  })
  .catch(function (ex) {
    console.log('parsing failed', ex)
  })

export default AxiosDemo
