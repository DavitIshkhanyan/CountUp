import { useState, useEffect } from 'react';

// class ConferenceData extends React.Component {
//     constructor() {
//       super();
//       this.state = { progress: 0 };
//       this.interval = null;
//       this.animationDuration = 6000;
//       this.startAnimation = null;
//     }
//     componentDidMount() {
      
//         this.startAnimation = Date.now();
//         const tick = () => {
//           const progress = Math.min(
//             1,
//             (Date.now() - this.startAnimation) / this.animationDuration
//           );
//           this.setState({ progress: progress });
//           if (progress < 1) {
//             requestAnimationFrame(tick);
//           }
//         };
//         tick();
//       }
    
//     render() {
//       return (
//         <div>
//           {Math.floor(this.state.progress * 3)} days ·
//           {Math.floor(this.state.progress * 21)} talks ·
//           {Math.floor(this.state.progress * 4)} workshops ·
//           {Math.floor(this.state.progress * 350)} attendees
//         </div>
//       );
//     }
//   }

const Test = ({start = 0, end = 5000, timer = 50}) => {
    const [progress, setProgress] = useState(start);
    let animationDuration = timer;
    let count = Math.floor(progress * end);

    useEffect(() => {
        let startAnimation = Date.now();
        const tick = () => {
            const progress = Math.min(
              1,
              (Date.now() - startAnimation) / animationDuration
            );
            setProgress(progress);
            // console.log(state * end);
            if (progress < 1) {
              setTimeout(tick);
            }
          };
        tick();
    }, []);

    return (
        <div>
          {/* {Math.floor(state * 3)} days ·
          {Math.floor(state * 21)} talks ·
          {Math.floor(state * 4)} workshops ·
          {Math.floor(state * 350)} attendees */}
          {start > count ? start : count}
        </div>
      );

}



export default Test;