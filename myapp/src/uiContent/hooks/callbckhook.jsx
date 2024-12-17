import React, { useCallback, useState } from 'react';
import ChildComp from './childComp';

export default function ParentCall() {

    const [count,setCount]=useState(1);
    const [callbackCount,setCallbackCount]=useState(0);

    // const handleClick=()=>{

    //     setCount(count+1);
    //     setCallbackCount(callbackCount+1)

    // }

    const handleCount=()=>{
        setCount(count+1);
    }

    const handleClick=useCallback(()=>{        
        setCallbackCount(callbackCount+1)
    },[count])


  return (
    <div>
        <ChildComp onClick={handleClick} value={count}/>
        <p>callback created :{callbackCount} times</p>

        <button onClick={handleCount}>updatecount</button>

    </div>
  )
}
