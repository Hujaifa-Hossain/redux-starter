import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  // const count = useSelector((state) => {state.counter.value});
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <section>
      <h3>{count}</h3>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

    </section>
  );
};

export default Counter;