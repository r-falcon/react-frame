import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useSearchParams,
  useLocation,
  useMatch,
  useNavigationType,
} from 'react-router-dom';

const Test1 = function () {
  const params = useParams();
  console.log('location', useLocation());
  const match = useMatch('/test1/:id');
  console.log('match', match);
  return 'test1 component, params is ' + params.id;
};

const Test2 = function () {
  console.log(useNavigationType());
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    'test2 component, searchParams is ' +
    searchParams.get('name') +
    ',' +
    searchParams.get('age')
  );
};

const Main = function () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/">Main</Link>
      <Link to="/test1/6">Test1</Link>
      <Link to="/test2?name=falcon&age=21">Test2</Link>
    </div>
  );
};

class History extends React.Component {
  render() {
    return (
      <div>
        <p>history路由</p>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Main></Main>}></Route>
            <Route path="/test1/:id" element={<Test1></Test1>}></Route>
            <Route path="/test2" element={<Test2></Test2>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default History;
