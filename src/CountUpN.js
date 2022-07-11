import { useState, useEffect, useRef } from 'react';
let x = 0;

function simple_easing(how_much_time_has_passed) {
    return (1 - Math.cos(how_much_time_has_passed * Math.PI)) / 2;
 }
 function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
    }
    function easeOutSine(x) {
        return Math.sin((x * Math.PI) / 2);
      }
    function easeOutQuad(x) {
        return 1 - (1 - x) * (1 - x);
        }
    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
        }

function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
    }


    function easeOutBounce(x) {
        const n1 = 7.5625;
        const d1 = 2.75;
        
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
        }
        function formatAmount(amount, separator = "") {
            return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
          }
          var c = 0
// setInterval(() => {
//     Promise.resolve(c++)
//     .then(console.log)
// }, 100);
const CountUpN = ({start = 0, end = 0, duration = 3000, decimals = 0, separator = ''}) => {
    
    // let d = useRef(null);
    const [count, setCount] = useState(start);
    const [c, setC] = useState(0);

    const amountToAnimate = end - start;
    let up = 0;
    // let t = 100;

    let starttime = null;

    function animate(timestamp) {
        if (!starttime) {
            starttime = timestamp;
        }
        const runtime = timestamp - starttime;
        // const relativeProgress = runtime / duration;
        // const relativeProgress = (1 - Math.cos((runtime / duration) * Math.PI)) / 2;


        const relativeProgress = easeOutQuint(runtime/duration);


        // console.log(runtime / duration);
        up = amountToAnimate * Math.min(relativeProgress, 1);
        // d.current.innerText = Math.floor(start+tt);
        // console.log(Math.floor(start+up));
        setCount((start+up).toFixed(decimals));
        // setCount(Math.ceil(start+up));

        x++;
        // console.log(x);

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
            <div>{formatAmount(count, separator)}</div>
        </div>
      );

}



export default CountUpN;







