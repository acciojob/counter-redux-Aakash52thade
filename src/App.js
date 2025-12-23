import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <div></div>
        <button id="incr-btn" onClick={() => dispatch(increment())}>increment</button>
        <button id="decr-btn" onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default App;