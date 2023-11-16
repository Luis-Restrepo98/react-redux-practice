import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from '../../store/counter/counterSlice';

const Counter = () => {

    const dispatch = useDispatch();
    const {counter} = useSelector((state) => state.counter);

  return (
    <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter