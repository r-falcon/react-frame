import React from 'react';
import ReactDOM from 'react-dom';
import PagePanel from './pages/pagePanel';
// import RoutePanel from './pages/router';
import LazyLoad from './pages/lazy';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <PagePanel />,
  // <RoutePanel />,
  <LazyLoad />,
  document.getElementById('root')
);

reportWebVitals();
