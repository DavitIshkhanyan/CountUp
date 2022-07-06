import './App.css';
import Counter from './Counter';
import CountUp from './CountUp';
import Test from './Test';
import Test1 from './Test1';
import Test2 from './Test2';
import CountUpv2 from './CountUpv2';

function App() {
  return (
    <div className="App">
      <input type='text' />
      <Counter from='100' to='5000' duration='3' /> {/* CSS-ova, strict-i depqum chi ashxatum */}
      <CountUp start={100} end={5000} timer={30} /> {/* erkar jamanak talu depqum erevum e, vor 25-25 e barcranum, strict-i u voch strict-i depqum tarbera */}
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
