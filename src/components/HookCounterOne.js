import React, { useState,useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name ,setName]=useState('')
    //useEffect(() => {
    //    document.title = 'you clicked ${count} times'
    //    console.log('useeffect - updating document title')
    //})----->in this case the state i updated even when not neccessary i.e while writing name
    useEffect(() => {
        document.title = 'you clicked ${count} times'
        console.log('useeffect - updating document title')
    },[count])//In this array the values are passed on whose change we want the useEffect to work

    //useeffect is written inside the function so that the props could be accessed without writing any additional code
    //requesting react to execute the function every time the component renders
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Count by UseEffect Hooks{count}</button>
        </div>)
}
export default HookCounterOne
//change the document title on button click(useEffect)
//In some cases update after every render may create some performance 
//problem , so we need a way to conditionally run effect