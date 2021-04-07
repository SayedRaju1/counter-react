import React, { useContext } from 'react';
import { CounterContext } from '../App';

const Component1 = () => {
    const counterContext = useContext(CounterContext)
    return (
        <div style={{ border: '10px solid red', margin: '10px' }}>
            <h1>Com 1</h1>
            <button onClick={() => counterContext.counterDispatch('increment')}>
                Increase
            </button>
            <button onClick={() => counterContext.counterDispatch('decrement')}>
                Decrease
            </button>
            <button onClick={() => counterContext.counterDispatch('reset')}>
                Reset
            </button>
        </div>
    );
};

export default Component1;