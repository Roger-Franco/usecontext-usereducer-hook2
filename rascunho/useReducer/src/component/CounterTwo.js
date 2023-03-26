import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 5
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'decrement':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'increment2':
      return {...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return {...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);
  console.log(dispatch);
  return (
    <div>
      <button onClick={() => dispatch({type:'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type:'increment', value: 5})}>Increment - 5</button>
      <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement - 5</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
      <div>
      <button onClick={() => dispatch({type:'increment2', value: 1})}>IncrementCounter 2</button>
      <button onClick={() => dispatch({type:'decrement2', value: 1})}>Decrement Counter 2</button>
      </div>
      <h1>First Counte - {state.firstCounter}</h1>
      <h1>Second Counter - {state.secondCounter}</h1>
    </div>
  )
}
