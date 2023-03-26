import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);
  console.log(dispatch);
  return (
    <div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <h1>{state}</h1>
    </div>
  )
}
