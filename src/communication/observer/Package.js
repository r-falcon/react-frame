import React, { Fragment } from 'react'
import EventBus from './EventBus'

class ComponentA extends React.Component {
  state = {
    info: '',
  }

  componentDidMount() {
    EventBus.addEventListener('myEvent', this.handleEvent)
  }

  componentWillUnmount() {
    EventBus.removeEventListener('myEvent', this.handleEvent)
  }

  handleEvent = (e) => {
    console.log(e.detail.log)
    this.setState({
      info: e.detail.log,
    })
  }

  render() {
    return <div>info is: {this.state.info}</div>
  }
}

class ComponentB extends React.Component {
  sendEvent = () => {
    EventBus.dispatchEvent('myEvent', { log: "I'm a log" })
  }

  render() {
    return <button onClick={this.sendEvent}>click again</button>
  }
}

class Package extends React.Component {
  render() {
    return (
      <Fragment>
        <ComponentA />
        <ComponentB />
      </Fragment>
    )
  }
}

export default Package
