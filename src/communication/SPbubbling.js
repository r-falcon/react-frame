import React from 'react'

class Son extends React.Component {
  render() {
    return <button>son click throuth parent</button>
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div onClick={this.handleClick}>
        <Son />
      </div>
    )
  }

  handleClick = () => {
    console.log('son clicked')
  }
}

class SPbubbling extends React.Component {
  render() {
    return <Parent />
  }
}

export default SPbubbling
