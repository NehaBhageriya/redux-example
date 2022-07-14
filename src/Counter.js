import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./action";
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h1>Redux Implementation</h1>
      <h4>{counter}</h4>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
export default Counter;
