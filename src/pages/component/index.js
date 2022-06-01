import React from 'react';
import PropsChildren from './ChildrenProps';
import Hoc from './HOC';

/**
 * 函数组件
 * 无状态组件（Function），无生命周期、无this、无state。当写成一个简单完美的函数组件时，因需求变动需要该组件有自己的state，则必须要很麻烦的将function换成class
 */
// function Component(props) {
//   let state = {
//     msg: 'success',
//   };
//   const { params } = props;
//   return (
//     <div>
//       这是一个函数组件,无状态组件，参数：{state.msg}，props：{params}
//     </div>
//   );
// }

/**
 * 类组件
 * 状态组件（Class）,有生命周期，有this，有state。在使用的过程中经常会用到忘记绑定this的bug
 */
// class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'success',
//     };
//   }

//   render() {
//     return (
//       <div>
//         这是一个类组件，状态组件，参数：{this.state.msg}，props：
//         {this.props.params}
//       </div>
//     );
//   }
// }

/**
 * 组件复用
 * 想要复用一个状态组件：渲染属性（render props）[this.props.children。注：props可以传递任何对象，包括组件和函数]、高阶组件（higher-order-components）[参数为组件，返回值为新组件的函数]
 */
function Component() {
  // ChildrenProps
  // return <PropsChildren />;
  // HOC
  return <Hoc />;
}

/**
 * 注意组件的三大属性：state、props、refs
 */

/**
 * 受控组件 vs 非受控组件
 * 受控组件：通过 setState 将输入的值维护到 state 中，需要时再从 state 中取出，这里的数据就受到了 state 的控制【推荐使用】
 * 非受控组件：所有输入类型的 DOM 都是现取现用
 */

export default Component;
