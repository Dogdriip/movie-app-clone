import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, movies: [] });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <h1>{isLoading ? "Loading..." : "Ready!"}</h1>
      </>
    );
  }
}

export default App;
