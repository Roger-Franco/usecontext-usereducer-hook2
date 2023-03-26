import React, { useContext } from 'react'
import { CountContext } from '../App';

export const ComponentD = () => {
  const countContext = useContext(CountContext)
  const {countState, countDispatch} = useContext(CountContext)
  console.log(countContext);
  return (
    <div>
      ComponentD - {countState} -
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  )
}
