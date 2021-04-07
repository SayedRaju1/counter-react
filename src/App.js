import { createContext, useReducer } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

export const CounterContext = createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider
      value={{ counterCount: count, counterDispatch: dispatch }}
    >
      <div className="App">
        <h1 style={{ border: '10px solid black', margin: '10px', fontSize: '60px' }}>Count - {count}</h1>

        <Component1 />
        <Component2 />
        <Component3 />

      </div>
    </CounterContext.Provider>

  );
}

export default App;
