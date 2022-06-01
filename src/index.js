import React from 'react';
import ReactDOM from 'react-dom';
import PagePanel from './pages/pagePanel';
import reportWebVitals from './reportWebVitals';

// 严格模式，ref报错
ReactDOM.render(
  // <React.StrictMode>
  //   <TodoList />
  // </React.StrictMode>,
  // <TodoList />,
  // <RouteDemo />,
  // <FactorRender />,
  // <ApiPanel />,
  // <Provider store={store}>
  //   <Container />
  // </Provider>,
  // <CommunicatePanel />,
  <PagePanel />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
