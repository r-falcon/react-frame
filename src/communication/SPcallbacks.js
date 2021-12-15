import React from 'react'

// 1.子传父第一种方式，回调函数
// const Son = ({ name, age, onClick }) => {
//   return (
//     <div>
//       <p>
//         name is:{name},age is:{age}
//       </p>
//       <button onClick={() => onClick('spcallbacks')}>click me</button>
//     </div>
//   )
// }

// 2.子传父第二种方式，props调用
class Son extends React.Component {
  render() {
    return (
      <div>
        <p>
          name is: {this.props.name},age is:{this.props.age}
        </p>
        <button onClick={() => this.props.onClick('spcallbacks')}>
          click me
        </button>
      </div>
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'falcon',
      age: 21,
    }
  }

  render() {
    return (
      <Son
        name={this.state.name}
        age={this.state.age}
        onClick={this.handleClick}
      />
    )
  }

  handleClick = (data) => {
    console.log('data is:', data)
  }
}

class SPcallbacks extends React.Component {
  render() {
    return <Parent />
  }
}

export default SPcallbacks
