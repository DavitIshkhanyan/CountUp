import { useState, useEffect, useRef } from 'react';

const CountUp = ({start = 0, end = 5000, timer = 50}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);

    const accumulator = end / 200;
    let t = Date.now();
    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if (result > end) return setState(end);
            setState(result);
            ref.current = result;
            console.log(Date.now() - t);
            setTimeout(updateCounterState, timer * 5);
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