import './App.css';
import {  CounterOne } from './component/CounterOne';
import { CounterThree } from './component/CounterThree';
import { CounterTwo } from './component/CounterTwo';


function App() {
  return (
    <div className='App'>
      <CounterOne/>
      <CounterTwo/>
      <CounterThree/>
      </div>
  );
}

export default App;
