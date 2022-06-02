import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Test1 = lazy(() => import('./Test1'));
const Test2 = lazy(() => import('./Test2'));

/**
 * lazy + suspense,实现组件懒加载
 */

const Main = function () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/">Main</Link>
      <Link to="/test1">Test1</Link>
      <Link to="/test2">Test2</Link>
    </div>
  );
};

class LazyLoad extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" exact element={<Main></Main>}></Route>
              <Route path="/test1" element={<Test1></Test1>}></Route>
              <Route path="/test2" element={<Test2></Test2>}></Route>
            </Routes>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default LazyLoad;
