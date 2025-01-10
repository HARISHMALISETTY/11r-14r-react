import React from "react";
import { increment, decrement } from "../../redux/actions/action";
import { useDispatch } from "react-redux";

export default function CounterControls() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}
