import './App.css';
import Counter from './Counter';
import CountUp from './CountUp';
import Test from './Test';
import Test1 from './Test1';
import Test2 from './Test2';
import CountUpv2 from './CountUpv2';
import CountUpN from './CountUpN';

function App() {
  return (
    // verjin duration-i 20%i chapov dandaxi
    <>
      {/* <Counter from='10' to='5000' duration='3' /> */}
      {/* <Counter from='1' to='100000000' duration='7' /> */}
      {/* <Counter from='21' to='310000000' duration='7' /> */}
      {/* <Test start={100} end={105} timer={3000} /> */}
      <CountUpN />
      {/* <CountUpN start={100} end={5000} timer={30000} /> */}
      {/* <CountUpN start={100} end={105} timer={3000} /> */}
    </>
  )
  return (
    <div className="App">
      <input type='text' />
      <Counter from='100' to='500000000' duration='3' /> {/* CSS-ova, strict-i depqum chi ashxatum */}
      {console.log('232332')}
      {/* <CountUp start={100} end={5000} timer={30} /> erkar jamanak talu depqum erevum e, vor 25-25 e barcranum, strict-i u voch strict-i depqum tarbera */}
      {/* <CountUpv2 start={100} end={5000} timer={30} /> mi qich erkara tevum, strict-i u voch strict-i depqum tarbera  */}
      {/* <Test start={100} end={5000} timer={3000} />  */}
      <Test1 start={700} end={5000} timer={3000} /> {/* tarber starteri depqum miajamanak chen sksum (TEST)*/}   
      {/* <Test1 start={200} end={5000} timer={3000} /> */}
      <Test2 start={100} end={5000} timer={3000} />  {/* tarber enderi depqum miajamanak chen avartvum */}
      {/* <Test2 start={700} end={5000} timer={3000} /> */}
    </div>
  );
}

export default App;
