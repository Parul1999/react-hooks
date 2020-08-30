import React, { useState } from 'react'

function HookCounter() {
   const [count,setCount]=useState(0)

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count by Hooks{count}</button>
        </div>)
}
export default HookCounter
//Only call hooks at top level and not in loops
//only call hooks from React Functions