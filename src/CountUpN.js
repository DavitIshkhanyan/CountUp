import { useState, useEffect, useRef } from 'react';

const CountUpN = ({start = 0, end = 5000, timer = 50}) => {
    // let d = useRef(null);
    const [count, setCount] = useState(start);

    const duration = timer;
    const amountToAnimate = end - start;
    let up = 0;
    // let t = 100;

    let starttime = null;

    function animate(timestamp) {
        if (!starttime) {
            starttime = timestamp;
        }
        const runtime = timestamp - starttime;
        const relativeProgress = runtime / duration;
        // console.log(runtime / duration);
        up = amountToAnimate * Math.min(relativeProgress, 1);
        // d.current.innerText = Math.floor(start+tt);
        // console.log(Math.floor(start+up));
        setCount(Math.floor(start+up));

        if (runtime < duration) {
            // if(relativeProgress > 0.8) {
            //     setTimeout(requestAnimationFrame(animate));
            // } else {
                requestAnimationFrame(animate);
            // }
        }

    }
    useEffect(() => {
        requestAnimationFrame(animate);
    }, [])

    return (
        <div>
            <div>{count}</div>
        </div>
      );

}



export default CountUpN;







