import React, { useEffect,useState } from "react";
export default function App27() {
  const [data, setdata] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  // const url = "http://localhost:8080"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setdata(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data && data.map((elem) => <div key={elem.id}>{elem.name}</div>)}
    </div>
  );
}