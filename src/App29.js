import React from "react";
import { useFetch } from "./useFetch";
export default function App29() {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const [data] = useFetch(url);
  console.log(data.length)
  return (
    <div>
      {data && data.map((elem) => (<li key={elem.id}>{elem.name}</li>))}
    </div>
  );
}