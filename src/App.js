import React from 'react';

/*
function Food(props) {
  return <h1>{props.fav}</h1>;
} */
function Food({fav}) {
  return <h1>{fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>asdfasdf</h1>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
