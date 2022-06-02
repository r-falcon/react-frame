import React from 'react';

class Computed extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  incrementAsync = () => {
    this.props.incrementAsync();
  };

  double = () => {
    this.props.double();
  };

  treble = () => {
    this.props.treble();
  };

  render() {
    return (
      <div>
        <p>current number is：{this.props.num}</p>
        <p>current count is：{this.props.count}</p>
        <button onClick={this.increment}>count++</button>
        <button onClick={this.decrement}>count--</button>
        <button onClick={this.incrementAsync}>async</button>
        <button onClick={this.double}>double num</button>
        <button onClick={this.treble}>treble num</button>
      </div>
    );
  }
}

export default Computed;
