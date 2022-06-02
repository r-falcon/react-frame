import { connect } from 'react-redux';
import countAction from './store/actions/countActions';
import numAction from './store/actions/numberActions';
import Computed from './Computed';

const mapStateToProps = state => {
  return {
    num: state.number.num,
    count: state.count.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (...args) => dispatch(countAction.increment(...args)),
    decrement: (...args) => dispatch(countAction.decrement(...args)),
    incrementAsync: (...args) => dispatch(countAction.incrementAsync(...args)),
    double: (...args) => dispatch(numAction.double(...args)),
    treble: (...args) => dispatch(numAction.treble(...args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Computed);
