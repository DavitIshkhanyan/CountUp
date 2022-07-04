import './App.css';
import Counter from './Counter';
import CountUp from './CountUp';
import Test from './Test';
import Test1 from './Test1';

function App() {
  return (
    <div className="App">
      <input type='text' />
      {/* <Counter from='100' to='5000' duration='3' /> */}
      {/* <CountUp start={100} end={5000} timer={15} /> */}
      <Test start={100} end={5000} timer={3000} />
      <Test1 start={100} end={5000} timer={3000} />
    </div>
  );
}

export default App;
