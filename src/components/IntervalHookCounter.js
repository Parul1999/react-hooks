import React, { useState,useEffect } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
        //way 2 is 
        //setCount(prevCount=>prevCount+1)
        //In this case the dependency list can be kept empty
    }
    
    useEffect(() => {
        //function dosomething() {
        //    console.log(someProp)
        //}
        //dosomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])//[count,someProp]
    //also if there is a function that need to be called in useEffect , always do that in useEffect itself , because else we tend to forget that the props need to be mentioned in dependency array
    //if we pass },[]) empty array then the count variable will go unnoticed by react on change, so not written
    return (
        <div>
            {count}
        </div>
    )
}
export default HookCounter

//In this the counter is updated automatically after a set interval of time