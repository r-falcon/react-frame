import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  // redux devtools调试用
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
