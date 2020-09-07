import React,{ useState, useEffect } from 'react'
function Conditional() {
    const [show,setShow] = useState(0);

    if (show) {
        return (
            <div>
                <h4>hi</h4>
                <button onClick={() => setShow(false)}>Hi Button</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h4>Hello</h4>
                <button onClick={() => setShow(true)}>Hello Button</button>
            </div>
        )
    }
}

export default Conditional