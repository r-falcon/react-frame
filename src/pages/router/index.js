import React from 'react';
import Hash from './Hash';
import History from './History';

/**
 * 与React Router5.x 相比，React Router6.x 的变化
 * 内置组件，移除了Switch，新增了Routes
 * 语法的变化：component={About} => element={<About />}
 * 新增多个hooks：useParams、useNavigate、useMatch
 */

/**
 * 路由模式：HashRouter(静态文件服务器)、BrowserRouter（服务器响应的web请求）
 * 路径匹配组件：Routes
 *  Route和Routes配合使用，所有的Route都要包含在Routes中
 *  path：匹配路径
 *  exact：精确匹配
 *  element：指定路由对应的组件；重定向，element={<Navigate to="/test1" />}
 *  caseSensitive:匹配时是否区分大小写，默认false
 * 导航组件：Link、NavLink
 *  navLink是特殊的link，当匹配时，可以为其渲染的nav元素添加样式属性
 */

/**
 * 路由跳转：路径'/'开头绝对路由，否则为相对路由
 * 动态路由参数：
 * 路径参数：
 * path="/test1/:id" => const params = useParams(); => console.log(params.id);
 * path="*" 可以匹配任何非空路由，同时该匹配拥有最低优先级，可以设置404页面
 */

class RoutePanel extends React.Component {
  render() {
    return (
      <div>
        <p>hash</p>
        <Hash />
        <p>history</p>
        <History />
      </div>
    );
  }
}

export default RoutePanel;
