import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const Login = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>Kurang</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Tambah</button>
      </div>
    </div>
  );
};

export default Login;
