import React from "react";
import { useState } from "react";
export default function App30() {
  const [count, setcount] = useState(0);
  const [obj, setobj] = useState({ name: "John", age: 20 });
  const [arr, setarr] = useState([6, 5]);
  const [arrObj, setArrObj] = useState([{ name: "John", age: 20 }]);
  const handleCount = () => {
    setcount(count + 10);
  };
  const handleObj = () => {
    // setobj({"name":"Cathy"});
    setobj({ ...obj, name: "Cathy" });
    // setobj((prev) => ({ ...prev, name: "Cathy" }));
  };

  const handleArr = () => {
    // setarr([9,3])
    setarr([...arr, 9, 3]);
    // setarr((prev) => [...prev, 9, 3]);
    //React requires state to be immutable. If we want to change a state, we make a copy of it and replace the old state with the new copy
    // setarr(...arr.filter((e) => e > 5));
  };

  const handleArrObj = () => {
    // setarr([9,3])
    setArrObj([...arrObj, { name: "Cathy", age: 25 }]);
  };
  return (
    <div>
      <button onClick={handleCount}>Set Count</button>
      {count}
      <hr></hr>
      <button onClick={handleObj}>Set Object</button>
      {JSON.stringify(obj)}
      <hr></hr>
      <button onClick={handleArr}>Set Array</button>
      {JSON.stringify(arr)}
      <hr></hr>
      <button onClick={handleArrObj}>Set Array of Objects</button>
      {JSON.stringify(arrObj)}
    </div>
  );
}