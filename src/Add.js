import React from "react";

export default function Add(props) {
  let result = props.arr.reduce((total, value) => {
    return total + value;
  });

  return <div>{result}</div>;
}
