import { useState, useEffect, useRef } from 'react';

const CountUp = ({start = 0, end = 5000, timer = 50}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);

    const accumulator = end / 200;
    
    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if (result > end) return setState(end);
            setState(result);
            ref.current = result;
        }
        setTimeout(updateCounterState, timer);
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