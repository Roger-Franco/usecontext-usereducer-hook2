import { createContext } from 'react';
import './App.css';
import { ComponentC } from './component/ComponentC';

export const UserContext = createContext()
export const SonContext = createContext()

function App() {
  return (
    <div className='App'>
      <UserContext.Provider value={'Roger'}>
      <SonContext.Provider value={'Thu'}>
      <ComponentC />
      </SonContext.Provider>
      </UserContext.Provider>
      </div>
  );
}

export default App;
