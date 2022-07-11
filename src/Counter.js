import React, { useState, useEffect, useRef } from "react";

const useComponentWillMount = (cb) => {
    const willMount = useRef(true)

    if (willMount.current) cb()

    willMount.current = false;
}

// window.CSS.registerProperty({
//     name: '--num',
//     syntax: '<integer>',
//     inherits: false,
//     initialValue: 315,
// });


function Counter({from, to, duration}) {
    const [num, setNum] = useState(from);
    // const containerRef = useRef();
    // useEffect(()=> {
    //     containerRef.current.style.setProperty('--num', from);
    // }, [])
    useEffect(() => {
        setNum(to);
    }, []);

    return (
        // <div ref={containerRef} className='a' style={{'--num': num, 'transitionDuration': duration+'s'}}></div>
        <div className='a' data-counter={num} style={{'--num': num, 'transitionDuration': duration+'s'}}></div>
    );
    

}

export default Counter;