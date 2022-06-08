import React, { Fragment } from 'react';
import StatePanel from './useState';
import EffectPanel from './userEffect';
import RefPanel from './useRef';
import MemoPanel from './useMemo';
import CallbackPanel from './useCallback';
import ContextPanel from './useContext';
import ReducerPanel from './useReducer';
import CustomizePanel from './useCustomize';

/**
 * 使用class的缺陷
 *  复杂组件变得难以理解（难以拆分）
 *  难以理解class（this)
 *  组件复用变得很困难（HOC、render props）
 * 使用hooks规则：
 *  只能在函数最外层调用Hook，不要在循环、条件判断或者子函数中调用
 *  只能在react函数组件中调用Hook,不要在其他js函数中调用Hook
 */

class HookPanel extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <StatePanel /> */}
        {/* <EffectPanel /> */}
        {/* <RefPanel /> */}
        {/* <MemoPanel /> */}
        {/* <CallbackPanel /> */}
        {/* <ContextPanel /> */}
        {/* <ReducerPanel /> */}
        <CustomizePanel />
      </Fragment>
    );
  }
}

export default HookPanel;
