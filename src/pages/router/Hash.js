import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  Navigate,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

const Test1 = function () {
  return 'test1 component';
};

const Test2 = function () {
  console.log(useNavigationType());
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>test2 component</div>
      <Link to="/test2/demo1">demo1</Link>
      {/* style className isActive */}
      <NavLink
        to="/test2/demo2"
        style={isActive => ({
          color: isActive ? 'red' : 'black',
          fontWeight: isActive ? 'bold' : 'black',
        })}
      >
        demo2
      </NavLink>
      <Outlet />
    </div>
  );
};

const Demo1 = function () {
  console.log('location', useLocation());
  return 'test2 demo1 component';
};

const Demo2 = function () {
  return 'test2 demo2 component';
};

const Main = function () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/">Main</Link>
      <Link to="/redirect">Redirect</Link>
      <Link to="/Test1">Test1</Link>
      <Link to="/test2">Test2</Link>
    </div>
  );
};

class Hash extends React.Component {
  render() {
    return (
      <div>
        <p>hash路由</p>
        <HashRouter>
          <Routes>
            <Route path="/" exact element={<Main></Main>}></Route>
            <Route
              path="/redirect"
              exact
              element={<Navigate to="/test1" />}
            ></Route>
            <Route
              path="/test1"
              element={<Test1></Test1>}
              caseSensitive
            ></Route>
            <Route path="/test2" element={<Test2></Test2>}>
              <Route path="demo1" element={<Demo1></Demo1>}></Route>
              <Route path="demo2" element={<Demo2></Demo2>}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default Hash;
