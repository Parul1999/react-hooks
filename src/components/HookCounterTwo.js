import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () =>{
        for(let i = 0;i<5; i++)
        {
            //setCount(count + 1)
            //It doesnt work because it takes the initial value
            //so make a function  that will set a new state value
            setCount(prevCount => prevCount+1)
}
}
    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>)
}
export default HookCounterTwo
//upadate the value using the previous state value pass it via function
