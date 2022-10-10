import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <h1>{count}</h1>

      <section>
        <button onClick={() => dispatch(increment())}>Increment ++</button>
        <button onClick={() => dispatch(decrement())}>Decrement --</button>
      </section>
        <input 
        type="text" 
        value={incrementAmount} 
        onChange={(e) => setIncrementAmount(e.target.value)} 
        />
      <section>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment By Amount</button>
        <button onClick={resetAll}>Reset All</button>
      </section>
    </div>
  );
};

export default Counter;
