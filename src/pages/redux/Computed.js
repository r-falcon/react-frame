import React from 'react';

class Computed extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div>
        <p>current number is：{this.props.num}</p>
        <button onClick={this.increment}>num++</button>
        <button onClick={this.decrement}>num--</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Computed;
