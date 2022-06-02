import { createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './reducers/countReducer';
import numberReducer from './reducers/numReducer';
// 引入redux-thunk,支持异步action
import thunk from 'redux-thunk';

const allReducer = combineReducers({
  count: countReducer,
  number: numberReducer,
});

export default createStore(allReducer, applyMiddleware(thunk));
