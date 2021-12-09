import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setcount] = useState(0)

    const decrease = () => {
        setcount(count-1)
    }
    const increase = () => {
        setcount(count+1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
            <button onClick={() => setcount(0)}>Reset</button>
        </div>
    )
}

export default Counter;