import React from "react";
import { useState } from "react";
export default function App23() {
  const [student, setStudent] = useState({ id: 0,name:"John" });
  const updateId = (id) => {
    setStudent((prev) => ({ ...prev, id })); //no need of id:id
  };
  // const updateId = (num) => {
  //   setStudent((prev) => ({ ...prev, id:num }));
  // };
  return (
    <div>
      {student.id}
      <button onClick={() => updateId(1)}>Update Id</button>
    </div>
  );
}