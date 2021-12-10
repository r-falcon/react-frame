import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>This is Home!</p>
        <Link to="/pageone" style={{ color: 'black' }}>
          <div>点击跳转到Page1</div>
        </Link>
        <Link to="/pagetwo" style={{ color: 'black' }}>
          <div>点击跳转到Page2</div>
        </Link>
      </div>
    )
  }
}

export default Home
