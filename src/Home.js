import React, { useState } from 'react';
const Home = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(0);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Counter App</h1>
                <p className="counter-value">{counter}</p>
                <div className="button-container">
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </header>
        </div>
    )
}

export default Home;
