import { useState, useEffect, useRef } from 'react';

const CountUp = ({start = 0, end = 5000, timer = 50}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);

    let accumulator = 1;
    if ((end-start) > (timer*1000)) {
        accumulator = end / 200;
    }
    
    let t = Date.now();
    
    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if (result > end) {
                // clearTimeout(a);
                return setState(end);
            }
            setState(result);
            ref.current = result;
            console.log(Date.now() - t);
            if (accumulator ===1) {
                setTimeout(updateCounterState, (timer*1000) / (end-start));
                // setTimeout(updateCounterState, timer / 1000);
            } else {
                setTimeout(updateCounterState, timer * 5);
            }
        }
        
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateCounterState();
        }

        return () => (isMounted = false);
    }, [end,start]);
    return <div>{state}</div>
};

export default CountUp;