import React from 'react';
import './index.css';
import styles from './test.module.css';

class JsxPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: [
        {
          value: 1,
          label: 'cooking',
        },
        {
          value: 2,
          label: 'running',
        },
        {
          value: 3,
          label: 'singing',
        },
      ],
    };
  }

  render() {
    return (
      // 4.虚拟DOM必须只有一个根标签
      // 5.所有标签必须闭合
      // 6.小写字母开头标签匹配检测html元素
      // 7.大写字母开头标签匹配检测是否有相应的组件
      <div className={styles.whole}>
        <p>写个循环</p>
        <ul>
          {/* 1.标签中混入js要使用花括号 */}
          {this.state.hobbies.map(item => {
            return (
              // 2.样式的类名使用className指定,直接引入css样式，模块化引入css
              <li key={item.value} className="item">
                {item.label}
              </li>
            );
          })}
        </ul>
        {/* 3.内联样式的写法 */}
        <p style={{ color: 'purple' }}>这是内联内容</p>
      </div>
    );
  }
}

export default JsxPanel;
