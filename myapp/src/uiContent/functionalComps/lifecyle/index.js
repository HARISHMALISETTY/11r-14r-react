import React, { useState } from "react";

export default function FuncLifeCycle() {
  const [text, setText] = useState("hii"); // it is in intialise stage

  const handleButton = () => {
    setText("hello");
  };

  return (
    <div>
      <h1>{text}</h1>

      <button onClick={handleButton}>click me</button>
    </div>
  );
}

// useState is the hook of functional component
// used to intialise/update/access the state
