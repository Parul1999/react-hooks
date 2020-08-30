import React, { useState,useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        //mousecontainer call , therefore return a cleanup function that if this componnt is not displayed then the event listener should not access the component 
        //cleanup code
        return () => {
            console.log('Component Unmounting Code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])//whatever is returned is cleanup function

    return (
        <div>
            Hooks X -{x} Y -{y}
        </div>)
}
export default HookMouse
//to call useEffect only once on initial render only , so an empty array is passed signifying it depends on nonw
//mimic componentDidMount