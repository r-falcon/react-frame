import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Pageone from './pages/Pageone'
import Pagetwo from './pages/Pagetwo'

class RouteDemo extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* 如下写法会报错： Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it. */}
          {/* <Route exact path="/" element={Home} /> */}
          {/* 纠正，element，返回有结束标签的元素 */}
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/pageone" element={<Pageone></Pageone>} />
          <Route path="/pagetwo" element={<Pagetwo></Pagetwo>} />
        </Routes>
      </Router>
    )
  }
}

export default RouteDemo
