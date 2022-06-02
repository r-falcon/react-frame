import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">Home</Link>
        <Link to="/jsx">JSX</Link>
        <Link to="/component">Component</Link>
        <Link to="/lifecircle">LifeCircle</Link>
        <Link to="/redux">Redux</Link>
      </div>
    );
  }
}

export default Home;
