import React from "react";
import PropTypes from "prop-types";

/* alertnative
function Food(props) {
  return <h1>{props.fav}</h1>;
} */
function Food({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>Rating: {rating}/5.0</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "name1",
    rating: 4.0,
  },
  {
    id: 2,
    name: "name2",
    rating: 2.3,
  },
  {
    id: 3,
    name: "name3",
    rating: 4.5,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
