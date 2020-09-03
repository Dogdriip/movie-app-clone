import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    console.log("plus");

    // "Do not mutate state directly. Use setState()"
    // setState() automatically calls render()
    // Mutating state directly does not calls render()
    // this.state.count = this.state.count + 1;

    // Use this.state.~~ is not recommended
    // this.setState({ count: this.state.count + 1 });

    // Best practice
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");

    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
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
