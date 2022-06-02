import React, { Fragment } from 'react';
import store from './store';
import Container from './Container';
import { Provider } from 'react-redux';

import SharePanel from './share';
class ReduxPanel extends React.Component {
  render() {
    return (
      <Fragment>
        {/* 整体为一个react-redux使用实例 */}
        <Provider store={store}>
          <Container />
        </Provider>
        {/* 实现多组件数据共享 */}
        <SharePanel />
      </Fragment>
    );
  }
}

export default ReduxPanel;
