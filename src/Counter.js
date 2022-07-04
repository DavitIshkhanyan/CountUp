import { useState, useEffect, useRef } from "react";

const useComponentWillMount = (cb) => {
    const willMount = useRef(true)

    if (willMount.current) cb()

    willMount.current = false;
}


function Counter({from, to, duration}) {
    // const [loaded, setLoaded] = useState(false);
    const [num, setNum] = useState(from);
    
    //   @property --num {
    //     syntax: '<integer>';
    //     initial-value: 100;
    //     inherits: false;
    //   }

    // const [counter, setCounter] = useState(from);
    // const [length, setlength] = useState(to);

    // const count = () => {
    //     let count = counter;
    //     setTimeout(() => {
    //         if (counter === length) return;
    //         setCounter(count + 1);
    //     });
    // };
// console.log(document.documentElement.style.setProperty('--num', 5000));

    useComponentWillMount(() => {
        // console.log(typeof getComputedStyle(document?.getElementsByClassName('a')[0])?.getPropertyValue('--num'));
        console.log(window.CSS);
        window.CSS.registerProperty({
            name: '--num',
            syntax: '<integer>',
            inherits: false,
            initialValue: from,
          });
        // console.log(document.styleSheets[0].cssRules[0].style.getPropertyValue("--num"));
        console.log(window.CSS);

    });

    useEffect(() => {
        
        // if (!getComputedStyle(document.getElementsByClassName('a')[0]).getPropertyValue('--num')) {
        
        // document.getElementsByClassName('a')[0].setAttribute('--num'] = from;);

            // window.CSS.registerProperty({
            //     name: '--num',
            //     syntax: '<integer>',
            //     inherits: false,
            //     initialValue: from,
            //   });
        // }
        // setTimeout(() => {
        // document.getElementsByClassName('a')[0].style.setProperty('transition-duration', duration+'s');

        // setLoaded(true);
        // setTimeout(() => setNum(to))
        setNum(to);
        
        // document.documentElement.style.setProperty('--num', num);
        // document.getElementsByClassName('a')[0].style.setProperty('--num', num);
        
        // });
        
        // document.documentElement.style.setProperty('--c', 'blue')
    });

    return (
        // <div className={"a" + (loaded ? " b" : "")} style={{'--num': num, 'transitionDuration': duration+'s'}}></div>
        // <div className='a' style={{'--num': num, 'transitionDuration': duration+'s'}}></div>
        <div className='a' style={{'--num': num, 'transitionDuration': duration+'s'}}></div>
    );
    

}

export default Counter;