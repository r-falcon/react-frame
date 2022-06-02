import React from 'react';

class Example extends React.Component {
  render() {
    return (
      <div>
        <p>
          current value is : x-{this.props.x},y-{this.props.y}
        </p>
        <button onClick={this.props.handleClick}>click it</button>
      </div>
    );
  }
}

/**
 * 高阶函数：接受的参数是一个函数；返回值是一个函数
 */
const HOC = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      };
    }

    handleClick = () => {
      this.setState({
        x: this.state.x + 1,
        y: this.state.y + 1,
      });
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          handleClick={this.handleClick}
        />
      );
    }
  };
};

export default HOC(Example);
