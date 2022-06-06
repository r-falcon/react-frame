import React from 'react';
import ReactDOM from 'react-dom';
import PagePanel from './pages/pagePanel';
// import RoutePanel from './pages/router';
// import LazyLoad from './pages/lazy';
import reportWebVitals from './reportWebVitals';

// 组件之间的通信，（父-子，子-父，兄弟之间，祖先-后代），src/communication

ReactDOM.render(
  <PagePanel />,
  // <RoutePanel />,
  // <LazyLoad />,
  document.getElementById('root')
);

reportWebVitals();
