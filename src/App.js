import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor!");
  }

  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("Component is mounted!");
  }
  componentDidUpdate() {
    console.log("Component is updated!");
  }

  render() {
    console.log("I'm updating!");
    return (
      <>
        <h1>I'm a class component!</h1>
        <h2>count: {this.state.count}</h2>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    );
  }
}

export default App;
