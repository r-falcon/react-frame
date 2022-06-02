import React from 'react';
import store from './store';
import Container from './Container';
import { Provider } from 'react-redux';

/**
 * 实现多组件数据共享
 */
class SharePanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default SharePanel;
