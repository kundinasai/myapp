import React from "react";
import PropTypes from "prop-types";

export default function App31(props) {
  // props.age=20

  return <div>{props.name}{props.age}</div>;
}

App31.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

App31.defaultProps = {
  name: "John",
  age: 20,
};