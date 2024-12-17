import React, { useMemo, useState } from "react";

export default function MemoHook() {

  function calculation(num) {
    console.log("performing calculation");
    let result=0;
    for (let i = 0; i < 100; i++) {
     result+= num;
    //   return result;
    }

    console.log(result)
  }

  const [count, setCount] = useState(5);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleCalc = useMemo(()=>{calculation(count)},[count])



// const handleCalc=()=>{
//     calculation(count)
// }
  return (
    <div>
      <button onClick={handleClick}>click me</button>

      <button onClick={handleCalc}>make calculation</button>

      <h1>{count}</h1>
    </div>
  );
}
