import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      const { year, title, summary, poster, genres } = state;
      return (
        <div>
          <h1>{title}</h1>
          <p>{year}</p>
          <p>{summary}</p>
          <p>{genres}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
