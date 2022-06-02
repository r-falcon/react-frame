import React from 'react';
import store from './store';
import Container from './Container';
import { Provider } from 'react-redux';

class ReduxPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default ReduxPanel;
