import React from 'react'
// import { connect } from 'react-redux'
// import actions from './actions/index'

// const mapStateToProps = (state) => {
//   return {
//     number: state.number,
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increment: (...args) => dispatch(actions.increment(...args)),
//     decrement: (...args) => dispatch(actions.decrement(...args)),
//   }
// }

class Computed extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        current number: {this.props.number}
        <button onClick={this.increment}>+number</button>
        <button onClick={this.decrement}>-number</button>
      </div>
    )
  }

  // 本目錄或者封裝
  increment = () => {
    this.props.increment()
  }
  decrement = () => {
    this.props.decrement()
  }

  // increment = () => {
  //   this.props.dispatch(actions.increment())
  // }
  // decrement = () => {
  //   this.props.dispatch(actions.decrement())
  // }
}

// export default connect((state) => ({
//   number: state.number,
// }))(Computed)
// export default connect(mapStateToProps, mapDispatchToProps)(Computed)
export default Computed
