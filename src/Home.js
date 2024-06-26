import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './action';

function Home() {

  const x = useSelector(state => state.xyz)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      HOME{x}
      <button onClick={() => { dispatch(increment()) }}>+</button>
    </div>
  )
}

export default Home;
