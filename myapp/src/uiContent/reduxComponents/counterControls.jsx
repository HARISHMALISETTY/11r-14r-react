import React from "react";
import { increment, decrement,incbyfive,decbyfive } from "../../redux/actions/action";
import { useDispatch } from "react-redux";

export default function CounterControls() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incbyfive(5))}>incrementbyfive</button>
      <button onClick={()=>dispatch(decbyfive(5))}>decbyfive</button>
    </div>
  );
}
