import { connect } from 'react-redux';
import actions from './store/action';
import Computed from './Computed';

/**
 * redux 用作状态管理的js库
 * 用途：某组件的状态需要和其他组件共享；某组件想要改变其他组件的状态
 * 三核心：
 * action：动作的对象，type字符串，唯一标识；data任意类型
 * store：将state、action、reducer联系在一起。得到新的state-getState();dispatch(action),分发action给store，触发reducer，产生新的state；subscribe(listener)注册监听，产生新的state时，自动调用
 * reducer：初始化状态，产生新的状态
 */
const mapStateToProps = state => {
  return {
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (...args) => dispatch(actions.increment(...args)),
    decrement: (...args) => dispatch(actions.decrement(...args)),
    reset: (...args) => dispatch(actions.reset(...args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Computed);
