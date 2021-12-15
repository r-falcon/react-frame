import { connect } from 'react-redux'
import actions from './actions/index'
import Computed from './Computed'

const mapStateToProps = (state) => {
  return {
    number: state.number,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (...args) => dispatch(actions.increment(...args)),
    decrement: (...args) => dispatch(actions.decrement(...args)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Computed)
