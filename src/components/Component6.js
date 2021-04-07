import React, { useContext } from 'react';
import { CounterContext } from '../App';

const Component6 = () => {
    const counterContext = useContext(CounterContext)
    return (
        <div style={{ border: '10px solid gray', margin: '3px' }}>
            <h3>Com 6 in Com 5</h3>
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

export default Component6;