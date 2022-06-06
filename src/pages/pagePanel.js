import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import JsxPanel from './jsx';
import Component from './component';
import LifeCircle from './lifecircle';
import ReduxPanel from './redux';
import StatePanel from './setState';
import HookPanel from './hooks';

class RouteDemo extends React.Component {
  render() {
    return (
      <div>
        <p>列表</p>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/jsx" element={<JsxPanel></JsxPanel>} />
            <Route
              path="/component"
              element={<Component params="hello world"></Component>}
            />
            <Route path="/lifecircle" element={<LifeCircle></LifeCircle>} />
            <Route path="/redux" element={<ReduxPanel></ReduxPanel>} />
            <Route path="/setState" element={<StatePanel></StatePanel>} />
            <Route path="/hooks" element={<HookPanel></HookPanel>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default RouteDemo;
