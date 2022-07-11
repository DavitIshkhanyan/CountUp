import React, { useState, useEffect, useRef } from 'react';

function easeOut(x) {
    return 1 - Math.pow(1 - x, 5);
}

function formatAmount(amount, separator = "") {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const CountUp = ({start = 0, end = 0, duration = 3, useEasing=true, decimals = 0, separator = ''}) => {
    const [count, setCount] = useState(start);
    duration *= 1000;
    
    const amountToAnimate = end - start;
    let up = 0;

    let starttime = null;

    function animate(timestamp) {
        if (!starttime) {
            starttime = timestamp;
        }
        const runtime = timestamp - starttime;

        let relativeProgress = runtime / duration;
        if (useEasing) {
            relativeProgress = easeOut(relativeProgress);
        }
        
        up = amountToAnimate * Math.min(relativeProgress, 1);
        setCount((start + up).toFixed(decimals));

        if (runtime < duration) {
            requestAnimationFrame(animate);
        }
    }
    useEffect(() => {
        requestAnimationFrame(animate);
    }, [start, end])

    return <span className="jackpot_amount_number">{formatAmount(count, separator)}</span>;
}

export default CountUp;
