import React, { useContext } from 'react'
import { CountContext } from '../App';

export const ComponentF = () => {
    const countContext = useContext(CountContext)
  const {countState, countDispatch} = useContext(CountContext)
  console.log(countContext);
  return (
    <div>
      ComponentF - {countState} -
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  )
}
