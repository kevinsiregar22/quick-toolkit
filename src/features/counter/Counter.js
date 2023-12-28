import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  resetCount,
  incrementByAmount,
} from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [data, setData] = useState(0);

  const addValue = Number(data) || 0;

  const resetAll = () => {
    setData(0);
    dispatch(resetCount());
  };

  return (
    <div>
      <div className="counter-container">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span className="counter-value">{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
      </div>
      <div className="reset-container">
        <button onClick={resetAll}>Reset Data</button>
      </div>
    </div>
  );
}

export default Counter;
