import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, minusCounter } from "../redux/actions/counter.actions";

function Counter() {
  const counterSelector = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter hooks</h1>
      <button onClick={() => {dispatch(addCounter())}}> + </button>
      {counterSelector}
      <button onClick={() => { dispatch(minusCounter())}}> - </button>
    </div>
  );
}

export default Counter;