import React, { useContext } from 'react';
import { CounterContext } from '../App';

const Component4 = () => {
    const counterContext = useContext(CounterContext)
    return (
        <div style={{ border: '10px solid green', margin: '5px' }}>
            <h2>Com 4 in com 2</h2>
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

export default Component4;