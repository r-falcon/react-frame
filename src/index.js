import React from 'react';
import ReactDOM from 'react-dom';
import PagePanel from './pages/pagePanel';
// import RoutePanel from './pages/router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <PagePanel />,
  // <RoutePanel />,
  document.getElementById('root')
);

reportWebVitals();
